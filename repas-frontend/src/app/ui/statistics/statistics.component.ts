import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorage} from '../../../services/jwtServices/tokenStorage';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {LogicEfficiencyService} from '../../../services/logicEfficiency.service';
import {LogicEfficiency} from '../../../data-model/logic-efficiency-model/LogicEfficiency';
import {PageOfLogicEfficiencies} from '../../../data-model/logic-efficiency-model/PageOfLogicEfficiencies';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  selectedRowIndex = null;
  stringSearch = null;


  data: PageOfLogicEfficiencies;
  dataSource: any;
  row: any;
  clicked: boolean;
  totalItems: number;
  pageIndicator: string;

  displayedColumns = ['idLogicEfficiency', 'abstractLogic_id', 'selecteCount', 'lastSelectDate', 'usageCount', 'lastUsageDate', 'testCount',
    'lastTestDate', 'successCount', 'lastSuccessDate'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  currentPage: number;
  pageSize: number;
  allSize = [5, 10, 15, 20, 25, 30];
  isSearchMode: boolean;

  constructor(public logicEfficiencyService: LogicEfficiencyService, private router: Router, private token: TokenStorage) {
    this.currentPage = 0;
    this.pageSize = this.allSize[1];
  }

  ngOnInit() {

    this.logicEfficiencyService.getListLogicEfficiency(this.currentPage, this.pageSize)
      .subscribe(data => {
        this.data = data;
        this.dataSource = new MatTableDataSource<LogicEfficiency>(this.data.content);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.computePageIndicator();
        this.isSearchMode = false;
      }, error => {
        this.token.handleError(error, this.router);
      });
    this.clicked = false;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectRow(row) {
    this.clicked = true;
    this.selectedRowIndex = row.id;
    this.row = row;
  }

  previousClicked() {
    if (!this.data.first) {
      this.loadData(this.data.number - 1, this.pageSize);
    }
  }

  nextClicked() {
    if (!this.data.last) {
      this.loadData(this.data.number + 1, this.pageSize);
    }
  }

  loadData(currentPage: number, pageSize: number) {
    if (!this.isSearchMode) {
      this.logicEfficiencyService.getListLogicEfficiency(currentPage, pageSize)
        .subscribe(data => {
          this.initData(data);
          this.dataSource.sort = this.sort;

        }, error => {
          this.token.handleError(error, this.router);
        });
      this.clicked = false;
    } else {
      this.logicEfficiencyService.searchLogicEfficiencyById(this.stringSearch, currentPage, pageSize)
        .subscribe(data => {
          this.initData(data);
        }, error => {
          this.token.handleError(error, this.router);
        });
      this.clicked = false;
    }
  }

  search() {
    this.currentPage = 0;
    this.isSearchMode = true;
    this.logicEfficiencyService.searchLogicEfficiencyById(this.stringSearch, this.currentPage, this.pageSize)
      .subscribe(data => {
        this.initData(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
        this.token.handleError(error, this.router);
      });
    this.clicked = false;
  }

  initData(data: PageOfLogicEfficiencies) {
    this.data = data;
    this.dataSource = this.data.content;
    this.computePageIndicator();
  }

  computePageIndicator() {
    this.pageIndicator = this.data.number + 1 + ' / ' + this.data.totalPages;
  }

  onChangeOption(size) {
    this.loadData(this.currentPage, this.pageSize);
  }
}

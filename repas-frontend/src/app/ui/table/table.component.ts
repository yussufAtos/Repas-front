import {Component, OnInit, ViewChild} from '@angular/core';
import {LogicService} from '../../../services/logic.service';
import {StandardLogic} from '../../../data-model/logic-model/StandardLogic';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PageOfLogics} from '../../../data-model/logic-model/PageOfLogics';
import {Router} from '@angular/router';
import {TokenStorage} from '../../../services/jwtServices/tokenStorage';
import {CompositeContingency} from '../../../data-model/logic-model/CompositeContingency';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  stringSearch = null;
  selectedRowIndex = null;

  data: PageOfLogics;
  dataSource: any;
  row: any;
  clicked: boolean;
  pageIndicator: string;
  contingenciesSelected: CompositeContingency[];

  panelOpenStateActionPrevenitve = false;
  panelOpenStateActionCurative = false;
  panelOpenStateContext = false;
  panelOpenStateContingency = false;
  panelOpenStateDescription = false;
  displayedColumns = ['short_desc', 'date_mod'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  currentPage: number;
  allSize = [5, 10, 15, 20, 25, 30];
  pageSize: number;
  isSearchMode: boolean;

  constructor(public logicService: LogicService, private router: Router, private token: TokenStorage) {
    this.currentPage = 0;
    this.pageSize = this.allSize[1];
  }

  displayDateTooltip(logic) {
    return logic.modificationDate;
  }

  ngOnInit() {
    this.logicService.getListLogic(this.currentPage, this.pageSize)
      .subscribe(data => {
        this.data = data;
        this.dataSource = new MatTableDataSource<StandardLogic>(this.data.content);
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
    this.contingenciesSelected = row.contingencies;
    console.log(row);
    this.selectedRowIndex = row.id;
    this.row = row;
    this.toggleAllPanels(true);
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
      this.logicService.getListLogic(currentPage, pageSize)
        .subscribe(data => {
          this.initData(data);
          this.toggleAllPanels(false);
        }, error => {
          this.token.handleError(error, this.router);
        });
      this.clicked = false;
    } else {
      this.logicService.searchLogicById(this.stringSearch, currentPage, pageSize)
        .subscribe(data => {
          this.initData(data);
          this.toggleAllPanels(false);
        }, error => {
          this.token.handleError(error, this.router);
        });
      this.clicked = false;
    }
  }

  toggleConstraint() {
    this.panelOpenStateContext = !this.panelOpenStateContext;
  }

  toggleContingency() {
    this.panelOpenStateContingency = !this.panelOpenStateContingency;
  }

  toggleDescription() {
    this.panelOpenStateDescription = !this.panelOpenStateDescription;
  }

  toggleActionPreventive() {
    this.panelOpenStateActionPrevenitve = !this.panelOpenStateActionPrevenitve;
  }

  toggleActionCurative() {
    this.panelOpenStateActionCurative = !this.panelOpenStateActionCurative;
  }

  search() {
    this.currentPage = 0;
    this.isSearchMode = true;
    this.logicService.searchLogicById(this.stringSearch, this.currentPage, this.pageSize)
      .subscribe(data => {
        this.initData(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
        this.token.handleError(error, this.router);
      });
    this.clicked = false;

    this.toggleAllPanels(false);
  }

  toggleAllPanels(state: boolean) {
    this.panelOpenStateActionPrevenitve = state;
    this.panelOpenStateActionCurative = state;
    this.panelOpenStateContext = state;
    this.panelOpenStateContingency = state;
    this.panelOpenStateDescription = state;
  }

  initData(data: PageOfLogics) {
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

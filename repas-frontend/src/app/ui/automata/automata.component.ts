import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorage} from '../../../services/jwtServices/tokenStorage';
import {AutomatonService} from '../../../services/automaton.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import {Automaton} from '../../../data-model/automaton-model/Automaton';
import {KeyValue} from '../../../data-model/KeyValue';
import {PageOfAutomata} from '../../../data-model/automaton-model/PageOfAutomata';

@Component({
  selector: 'app-automata',
  templateUrl: './automata.component.html',
  styleUrls: ['./automata.component.css']
})
export class AutomataComponent implements OnInit, AfterViewInit {

  @ViewChild('tabs')
  private tabs: NgbTabset;

  parameterSelected: KeyValue;
  parametersS: Array<KeyValue>;
  disabled: boolean;
  automatonSelected: Automaton;
  selectedRowIndex = null;
  stringSearch = null;
  data: PageOfAutomata;
  dataSource: any;
  row: any;
  clicked: boolean;
  pageIndicator: string;

  displayedColumns = ['name', 'externalId', 'modelId', 'type', 'beginningOfLife', 'endOfLife', 'defaultEnabled', 'status', 'enabled'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  currentPage: number;
  pageSize: number;
  allSize = [5, 10, 15, 20, 25, 30];

  isSearchMode: boolean;

  constructor(public automatonService: AutomatonService, private router: Router, private token: TokenStorage) {
    this.currentPage = 0;
    this.pageSize = this.allSize[1];
    this.disabled = true;
    this.parametersS = new Array<KeyValue>();
  }

  ngOnInit(): void {
    this.automatonService.getListAutomaton(this.currentPage, this.pageSize)
      .subscribe(data => {
        this.data = data;
        this.dataSource = new MatTableDataSource<Automaton>(this.data.content);
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

  selectRowAutomaton(row) {
    this.automatonSelected = row;
    for (let i = 0; i < Object.keys(this.automatonSelected.parameters).length; i++) {
      this.parametersS.push(
        new KeyValue(
          Object.keys(this.automatonSelected.parameters)[i],
          Object.values(this.automatonSelected.parameters)[i]
        )
      );
    }
    this.parameterSelected = null;
    this.clicked = true;
    this.selectedRowIndex = row.id;
    this.row = row;
    this.tabs.activeId = 'details';
    this.disabled = false;
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
      this.automatonService.getListAutomaton(currentPage, pageSize)
        .subscribe(data => {
          this.initData(data);
          this.dataSource.sort = this.sort;
        }, error => {
          this.token.handleError(error, this.router);
        });
      this.clicked = false;
    } else {
      this.automatonService.searchAutomatonById(this.stringSearch, currentPage, pageSize)
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
    this.automatonService.searchAutomatonById(this.stringSearch, this.currentPage, this.pageSize)
      .subscribe(data => {
        this.initData(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
        console.log(error);
        this.token.handleError(error, this.router);
      });
    this.clicked = false;
  }

  initData(data: PageOfAutomata) {
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


  ngAfterViewInit(): void {
    this.tabs.activeId = 'list';
  }

  selectRowParameter(parameter: KeyValue) {
    this.parameterSelected = parameter;
  }

}

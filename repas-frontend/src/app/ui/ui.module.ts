import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {TableComponent} from './table/table.component';
import {ChartModule} from 'angular2-chartjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTableModule} from 'angular-6-datatable';
import {SharedModule} from '../shared/shared.module';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';

import {AboutComponent} from './about/about.component';
import {UiRoutingModule} from './ui.routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {StatisticsComponent} from './statistics/statistics.component';
import {ActionTableComponent} from './action-table/action-table.component';
import {AutomataComponent} from './automata/automata.component';
import {ContingencyTreeComponent} from './contingency-tree/contingency-tree.component';
import {AdministrationComponent} from './administration/administration.component';


@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    ChartModule,
    SharedModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule,
    MatTreeModule, MatIconModule, MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    UiRoutingModule,
    ReactiveFormsModule,
    MatTooltipModule,
    TranslateModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    AboutComponent,
    StatisticsComponent,
    AdministrationComponent,
    AutomataComponent,
    ActionTableComponent,
    ContingencyTreeComponent
  ],
})
export class UiModule {
}

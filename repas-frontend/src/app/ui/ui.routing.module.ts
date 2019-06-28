import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {TableComponent} from './table/table.component';
import {AboutComponent} from './about/about.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {AutomataComponent} from './automata/automata.component';
import {AdministrationComponent} from './administration/administration.component';
import {AuthGuard} from '../../services/jwtServices/AuthGuard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: TableComponent},
      {path: 'home', component: TableComponent},
      {path: 'about', component: AboutComponent},
      {path: 'statistics', component: StatisticsComponent},
      {
        path: 'administration',
        component: AdministrationComponent,
        canActivate: [AuthGuard],
        data: {roles: ['ROLE_ADMIN', 'ROLE_ADVANCED']}
      },
      {path: 'automata', component: AutomataComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule {
}

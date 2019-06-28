import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../services/jwtServices/AuthGuard';

const routes: Routes = [
  {path: '', loadChildren: './ui/ui.module#UiModule', canActivate: [AuthGuard]},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../services/jwtServices/AuthGuard';
import {APP_BASE_HREF} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {NotFoundComponent} from './not-found/not-found.component';

describe('AppComponent', () => {

  const routes: Routes = [
    {path: '', loadChildren: './ui/ui.module#UiModule', canActivate: [AuthGuard]},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
    {path: '**', redirectTo: 'not-found'}
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NotFoundComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        RouterTestingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        SlimLoadingBarService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});

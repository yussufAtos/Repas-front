import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TokenStorage} from '../../services/jwtServices/tokenStorage';
import {UiModule} from '../ui/ui.module';
import {RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthGuard} from '../../services/jwtServices/AuthGuard';
import {APP_BASE_HREF} from '@angular/common';
import {AuthenticationService} from '../../services/jwtServices/Authentication.service';
import {AuthenticationServiceMocked} from '../mocks/AuthenticationServiceMocked';

describe('LoginComponent', () => {
  const routes: Routes = [
    {path: '', loadChildren: './ui/ui.module#UiModule', canActivate: [AuthGuard]},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
    {path: '**', redirectTo: 'not-found'}
  ];

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        UiModule,
        RouterModule.forRoot(routes),
        RouterTestingModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: AuthenticationService, useClass: AuthenticationServiceMocked},
        TokenStorage
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

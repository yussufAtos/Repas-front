import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActionTableComponent} from './action-table.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../../app.module';
import {HttpClient} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {TokenStorage} from '../../../services/jwtServices/tokenStorage';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import {LogicService} from '../../../services/logic.service';
import {LogicServiceMocked} from '../../mocks/LogicServiceMocked';
import {Routes} from '@angular/router';
import {AuthGuard} from '../../../services/jwtServices/AuthGuard';

describe('ActionTableComponent', () => {
  const routes: Routes = [
    {path: '', loadChildren: './ui/ui.module#UiModule', canActivate: [AuthGuard]},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
    {path: '**', redirectTo: 'not-found'}
  ];

  let component: ActionTableComponent;
  let fixture: ComponentFixture<ActionTableComponent>;
  let logicServiceMocked: LogicServiceMocked = new LogicServiceMocked();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        // UiModule,
        // RouterModule.forRoot(routes),
        // RouterTestingModule,
        // BrowserAnimationsModule
        HttpClientTestingModule
      ],
      declarations: [ActionTableComponent],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: LogicService, useClass: LogicServiceMocked},
        // TranslateService,
        HttpTestingController,
        TokenStorage
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTableComponent);
    component = fixture.componentInstance;
    const expectedCompositeAction = logicServiceMocked.getActionComposit();
    component.compositeAction = expectedCompositeAction;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

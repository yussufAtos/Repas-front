import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StatisticsComponent} from './statistics.component';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from '../../app.module';
import {UiModule} from '../ui.module';
import {LogicEfficiencyService} from '../../../services/logicEfficiency.service';
import {LogicEfficiencyServiceMocked} from '../../mocks/LogicEfficiencyServiceMocked';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../../services/jwtServices/AuthGuard';
import {APP_BASE_HREF} from '@angular/common';
import {TokenStorage} from '../../../services/jwtServices/tokenStorage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('StatisticsComponent', () => {
  const routes: Routes = [
    {path: '', loadChildren: './ui/ui.module#UiModule', canActivate: [AuthGuard]},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
    {path: '**', redirectTo: 'not-found'}
  ];

  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        UiModule,
        RouterModule.forRoot(routes),
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [
        TranslateService,
        {provide: LogicEfficiencyService, useClass: LogicEfficiencyServiceMocked},
        {provide: APP_BASE_HREF, useValue: '/'},
        TokenStorage,
        HttpTestingController
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    component.selectRow(2);
    component.stringSearch = '';
    component.loadData(0, 2);
    component.search();
    fixture.detectChanges();
    component.previousClicked();
    component.nextClicked();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`form should be invalid`, async(() => {
    expect(component.data.numberOfElements).toBe(2);
    expect(component.data.last).toBe(false);
    expect(component.data.first).toBe(false);
    expect(component.row).toBe(2);
    expect(component.clicked).toBe(false);
  }));

});

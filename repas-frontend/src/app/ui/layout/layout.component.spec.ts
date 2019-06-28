import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutComponent} from './layout.component';
import {RouterModule, Routes} from '@angular/router';
import {TableComponent} from '../table/table.component';
import {AboutComponent} from '../about/about.component';
import {StatisticsComponent} from '../statistics/statistics.component';
import {RouterTestingModule} from '@angular/router/testing';
import {UiModule} from '../ui.module';
import {APP_BASE_HREF} from '@angular/common';
import {TokenStorage} from '../../../services/jwtServices/tokenStorage';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from '../../app.module';
import {AutomataComponent} from '../automata/automata.component';
import {AdministrationComponent} from '../administration/administration.component';

describe('LayoutComponent', () => {

  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        {path: '', component: TableComponent},
        {path: 'home', component: TableComponent},
        {path: 'about', component: AboutComponent},
        {path: 'statistics', component: StatisticsComponent},
        {path: 'administration', component: AdministrationComponent},
        {path: 'automata', component: AutomataComponent},
      ]
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        RouterModule.forRoot(routes),
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        UiModule,
        HttpClientTestingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        TranslateService,
        HttpTestingController,
        TokenStorage
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

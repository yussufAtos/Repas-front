import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';
import {LayoutComponent} from '../layout/layout.component';
import {TableComponent} from '../table/table.component';
import {AboutComponent} from '../about/about.component';
import {StatisticsComponent} from '../statistics/statistics.component';
import {UiModule} from '../ui.module';
import {TokenStorage} from '../../../services/jwtServices/tokenStorage';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpLoaderFactory} from '../../app.module';
import {HttpClient} from '@angular/common/http';
import {AutomataComponent} from '../automata/automata.component';
import {AdministrationComponent} from '../administration/administration.component';
import {TokenStorageMocked} from '../../mocks/TokenStorageMocked';

describe('HeaderComponent', () => {

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {

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

    localStorage.setItem('User', JSON.stringify(TokenStorageMocked.getCurrentUser()));
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

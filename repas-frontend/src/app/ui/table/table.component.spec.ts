import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TableComponent} from './table.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../../services/jwtServices/AuthGuard';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../../app.module';
import {HttpClient} from '@angular/common/http';
import {UiModule} from '../ui.module';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_BASE_HREF} from '@angular/common';
import {TokenStorage} from '../../../services/jwtServices/tokenStorage';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import {LogicServiceMocked} from '../../mocks/LogicServiceMocked';
import {LogicService} from '../../../services/logic.service';

describe('TableComponent', () => {

  const routes: Routes = [
    {path: '', loadChildren: './ui/ui.module#UiModule', canActivate: [AuthGuard]},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
    {path: '**', redirectTo: 'not-found'}
  ];

  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

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
        {provide: LogicService, useClass: LogicServiceMocked},
        {provide: APP_BASE_HREF, useValue: '/'},
        TokenStorage,
        HttpTestingController
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.selectRow(1);
    component.stringSearch = '';
    component.loadData(0, 1);
    component.search();
    fixture.detectChanges();
    component.previousClicked();
    component.nextClicked();
    component.toggleActionCurative();
    component.toggleActionPreventive();
    component.toggleConstraint();
    component.toggleContingency();
    component.toggleDescription();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`form should be invalid`, async(() => {
    expect(component.data.numberOfElements).toBe(1);
    expect(component.data.last).toBe(false);
    expect(component.data.first).toBe(false);
    expect(component.row).toBe(1);
    expect(component.panelOpenStateActionCurative).toBe(true);
    expect(component.panelOpenStateActionPrevenitve).toBe(true);
    expect(component.panelOpenStateContingency).toBe(true);
    expect(component.panelOpenStateContext).toBe(true);
    expect(component.panelOpenStateDescription).toBe(true);
  }));


});

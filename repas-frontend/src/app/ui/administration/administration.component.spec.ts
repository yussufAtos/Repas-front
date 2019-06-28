import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from '../../app.module';
import {UiModule} from '../ui.module';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../../services/jwtServices/AuthGuard';
import {APP_BASE_HREF} from '@angular/common';
import {TokenStorage} from '../../../services/jwtServices/tokenStorage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdministrationComponent} from './administration.component';
import {TokenStorageMocked} from '../../mocks/TokenStorageMocked';
import {UploadCatalogService} from '../../../services/upload.catalog.service';
import {UploadCatalogServiceMocked} from '../../mocks/UploadCatalogMocked';

describe('AdministrationComponent', () => {
  const routes: Routes = [
    {path: '', loadChildren: './ui/ui.module#UiModule', canActivate: [AuthGuard]},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
    {path: '**', redirectTo: 'not-found'}
  ];

  let component: AdministrationComponent;
  let fixture: ComponentFixture<AdministrationComponent>;

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
        {provide: UploadCatalogService, useClass: UploadCatalogServiceMocked},
        {provide: TokenStorage, useClass: TokenStorageMocked},
        {provide: APP_BASE_HREF, useValue: '/'},
        TokenStorage,
        HttpTestingController
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

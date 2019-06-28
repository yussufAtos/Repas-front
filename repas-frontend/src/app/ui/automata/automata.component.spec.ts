import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AutomataComponent} from './automata.component';
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
import {AutomatonService} from '../../../services/automaton.service';
import {AutomatonServiceMocked} from '../../mocks/AutomatonServiceMocked';

describe('AutomataComponent', () => {

  const routes: Routes = [
    {path: '', loadChildren: './ui/ui.module#UiModule', canActivate: [AuthGuard]},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
    {path: '**', redirectTo: 'not-found'}
  ];

  let component: AutomataComponent;
  let fixture: ComponentFixture<AutomataComponent>;

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
        {provide: AutomatonService, useClass: AutomatonServiceMocked},
        {provide: APP_BASE_HREF, useValue: '/'},
        TokenStorage,
        HttpTestingController
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomataComponent);
    component = fixture.componentInstance;
    component.stringSearch = '';
    component.loadData(0, 2);
    component.search();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`Check if true`, async(() => {
    expect(component.data.numberOfElements).toBe(2);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(3);
      expect(component.data.last).toBe(false);
      expect(component.data.first).toBe(false);
      expect(component.clicked).toBe(false);
      let row1 = tableRows[1];
      expect(row1.cells[0].innerHTML).toBe('ADA1');

      let row2 = tableRows[2];
      expect(row2.cells[0].innerHTML).toBe('ADA2');
    });
  }));

});

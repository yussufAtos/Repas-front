import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LogicService} from '../services/logic.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {AppRoutingModule} from './app.routing.module';
import {AuthenticationService} from '../services/jwtServices/Authentication.service';
import {AuthGuard} from '../services/jwtServices/AuthGuard';
import {Interceptor} from '../services/jwtServices/interceptor';
import {TokenStorage} from '../services/jwtServices/tokenStorage';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LogicEfficiencyService} from '../services/logicEfficiency.service';
import {AutomatonService} from '../services/automaton.service';
import {UploadCatalogService} from '../services/upload.catalog.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    SlimLoadingBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientXsrfModule.withOptions({
      cookieName: 'RePAS-XSRF-TOKEN',
      headerName: 'RePAS-X-XSRF-TOKEN',
    })
  ],
  providers: [AutomatonService, LogicEfficiencyService, UploadCatalogService, LogicService, AuthenticationService, AuthGuard, TokenStorage,
    {provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi : true}
      ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {

  return new TranslateHttpLoader(http);

}


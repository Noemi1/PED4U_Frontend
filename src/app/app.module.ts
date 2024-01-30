import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { PrimengModule } from './shared/primeng.module';
import { LibsModule } from './shared/libs.module';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { RequestInterceptor } from './helpers/request.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';
import { NgxMaskPipe } from 'ngx-mask';
import { NgxMaskModule } from 'ngx-mask';
import { DatePipe } from '@angular/common';
import { AccountService } from './services/account.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PrimengModule,
    // LibsModule,
    NgxMaskModule.forRoot({ validation: true, triggerOnMaskChange: true, }),
    ToastrModule.forRoot({
      preventDuplicates: true,
    })
  ],
  providers: [
    CurrencyPipe,
    DatePipe,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

],
bootstrap: [AppComponent]
})
export class AppModule { }

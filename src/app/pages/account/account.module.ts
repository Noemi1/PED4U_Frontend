import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account.routing';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountComponent } from './account.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';
import { CheckboxModule } from 'primeng/checkbox';
import { LoginComponent } from './login/login.component';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';
import { ImageModule } from 'primeng/image';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '../../shared/primeng.module';
import { NgxMaskModule } from 'ngx-mask';
@NgModule({
  declarations: [
    ForgotPasswordComponent,
    CreateAccountComponent,
    AccountComponent,
    LoginComponent,
    VerifyEmailComponent,
    TermosDeUsoComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ToastrModule,
    FontAwesomeModule,
    CheckboxModule,
    DividerModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ImageModule,
    SharedModule,


    CommonModule,
    FormsModule,
    PrimengModule,

    SharedModule,

    CheckboxModule,
    NgxMaskModule.forRoot()

  ],
  bootstrap: [AccountComponent],
})
export class AccountModule { }

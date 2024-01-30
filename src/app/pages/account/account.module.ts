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
@NgModule({
  declarations: [
    ForgotPasswordComponent,
    CreateAccountComponent,
    AccountComponent,
    LoginComponent,
    VerifyEmailComponent
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
    PasswordModule

  ],
  bootstrap: [AccountComponent],
})
export class AccountModule { }

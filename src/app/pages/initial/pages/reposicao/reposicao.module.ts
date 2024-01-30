import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { ListComponent } from './list/list.component';
import { PrimengModule } from '../../../../shared/primeng.module';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ReposicaoRoutingModule } from './reposicao-routing.module';
import {  NgxMaskModule } from 'ngx-mask';
@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    ReposicaoRoutingModule,
    SharedModule,
    InputNumberModule,
    CheckboxModule,
    NgxMaskModule.forRoot()

  ]
})
export class ReposicaoModule { }

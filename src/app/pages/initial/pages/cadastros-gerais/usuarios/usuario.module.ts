import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { PrimengModule } from '../../../../../shared/primeng.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { NgxMaskPipe } from 'ngx-mask';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import {  NgxMaskModule } from 'ngx-mask';
@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    DeleteComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    UsuarioRoutingModule,
    CommonModule,
    FormsModule,
    PrimengModule,
    CheckboxModule,
    InputNumberModule,
    NgxMaskModule.forRoot()
  ]
})
export class UsuarioModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../../../../../shared/primeng.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { FormComponent } from './form/form.component';
import {  NgxMaskModule } from 'ngx-mask';
import { DeleteComponent } from './delete/delete.component';
import { TurmasRoutingModule } from './turmas.routing';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    TurmasRoutingModule,
    FormsModule,
    PrimengModule,
    SharedModule,
    NgxMaskModule.forRoot()

  ]
})
export class TurmasModule { }

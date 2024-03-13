import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AulasRoutingModule } from './aulas-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ListComponent } from './list/list.component';
import { PrimengModule } from '../../../../shared/primeng.module';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import {  NgxMaskModule } from 'ngx-mask';
import { ListComponent as Turmas } from '../cadastros-gerais/turmas/list/list.component';
import { TurmasModule } from '../cadastros-gerais/turmas/turmas.module';
import { LOCALE_ID } from '@angular/core';
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
    AulasRoutingModule,
    SharedModule,
    InputNumberModule,
    CheckboxModule,
    NgxMaskModule.forRoot(),

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class AulasModule { }

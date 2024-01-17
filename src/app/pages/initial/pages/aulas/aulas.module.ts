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
    InputNumberModule
  ]
})
export class AulasModule { }

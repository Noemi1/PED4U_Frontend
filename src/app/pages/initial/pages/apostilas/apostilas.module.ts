import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { ApostilasRoutingModule } from './apostilas-routing.module';
import { PrimengModule } from '../../../../shared/primeng.module';
import { SharedModule } from '../../../../shared/shared.module';
import { NgxMaskPipe } from 'ngx-mask';
import { ListComponent } from './list/list.component';
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
    ApostilasRoutingModule,
    CommonModule,
    FormsModule,
    PrimengModule,
    SharedModule,
    NgxMaskDirective,
    NgxMaskPipe,
    InputNumberModule
  ]
})
export class ApostilasModule { }

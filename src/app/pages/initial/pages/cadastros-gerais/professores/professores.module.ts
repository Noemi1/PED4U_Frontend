import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../../../../../shared/primeng.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { FormComponent } from './form/form.component';
import { NgxMaskDirective, NgxMaskModule, NgxMaskPipe } from 'ngx-mask';
import { DeleteComponent } from './delete/delete.component';
import { ProfessoresRoutingModule } from './professores-routing.module';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ProfessoresRoutingModule,
    FormsModule,
    PrimengModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ]
})
export class ProfessoresModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos.routing';
import { ListComponent } from './list/list.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../../../../../shared/primeng.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { FormComponent } from './form/form.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { DeleteComponent } from './delete/delete.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule,
    PrimengModule,
    SharedModule,
    NgxMaskModule.forRoot()

  ]
})
export class AlunosModule { }

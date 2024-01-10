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


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule,
    TableModule,
    DropdownModule,
    TagModule,
    SliderModule,
    ProgressBarModule,
    MultiSelectModule,
    InputTextModule,
    ButtonModule,

  ]
})
export class AlunosModule { }

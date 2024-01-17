import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PrimengModule } from './primeng.module';
import { FormsModule } from '@angular/forms';
import { ListSharedComponent } from './list/list.component';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    ListSharedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    InputNumberModule
  ],
  exports: [
    BreadcrumbComponent,
    ListSharedComponent
  ],
})
export class SharedModule { }

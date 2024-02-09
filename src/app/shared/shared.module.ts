import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PrimengModule } from './primeng.module';
import { FormsModule } from '@angular/forms';
import { ListSharedComponent } from './list/list.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { NgxMaskModule } from 'ngx-mask';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    ListSharedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    InputNumberModule,
    NgxMaskModule.forRoot(),
    PaginatorModule

  ],
  exports: [
    BreadcrumbComponent,
    ListSharedComponent
  ],
})
export class SharedModule { }

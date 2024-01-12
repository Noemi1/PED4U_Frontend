import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PrimengModule } from './primeng.module';



@NgModule({
    declarations: [
        BreadcrumbComponent
    ],
    imports: [
        CommonModule,
        PrimengModule,
    ],
    exports: [
        BreadcrumbComponent
    ],
})
export class SharedModule { }

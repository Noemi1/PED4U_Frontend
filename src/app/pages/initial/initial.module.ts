import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialRoutingModule } from './initial.routing';
import { HeaderComponent } from '../../parts/header/header.component';
import { NavigationComponent } from '../../parts/navigation/navigation.component';
import { InitialComponent } from './initial.component';
import { PrimengModule } from '../../shared/primeng.module';
import { ImageModule } from 'primeng/image';

@NgModule({
    declarations: [
        InitialComponent,
        HeaderComponent,
        NavigationComponent,
    ],
    imports: [
        CommonModule,
        InitialRoutingModule,
        PrimengModule,
        ImageModule
    ]
})
export class InitialModule { }

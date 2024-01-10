import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialRoutingModule } from './initial.routing';
import { HeaderComponent } from '../../parts/header/header.component';
import { NavigationComponent } from '../../parts/navigation/navigation.component';
import { InitialComponent } from './initial.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
@NgModule({
    declarations: [
        InitialComponent,
        HeaderComponent,
        NavigationComponent,
    ],
    imports: [
        CommonModule,
        InitialRoutingModule,
        SidebarModule,
        ButtonModule,
        PanelMenuModule,
        DividerModule,
        ToolbarModule,
        SplitButtonModule,
        TagModule,
        AvatarModule,
        PanelModule
        

    ]
})
export class InitialModule { }

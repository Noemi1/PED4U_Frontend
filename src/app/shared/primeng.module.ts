import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
    imports: [
        CommonModule,
        SidebarModule,
        ButtonModule,
        PanelMenuModule,
        DividerModule,
        ToolbarModule,
        SplitButtonModule,
        TagModule,
        AvatarModule,
        PanelModule,
        BreadcrumbModule,
        TableModule,
        DropdownModule,
        SliderModule,
        ProgressBarModule,
        MultiSelectModule,
        InputTextModule,
        CardModule,
        ContextMenuModule,
        DialogModule,
        RippleModule,
        InputMaskModule,
        CalendarModule,
        SelectButtonModule,
        PaginatorModule
    ],
    exports: [
        CommonModule,
        SidebarModule,
        ButtonModule,
        PanelMenuModule,
        DividerModule,
        ToolbarModule,
        SplitButtonModule,
        TagModule,
        AvatarModule,
        PanelModule,
        BreadcrumbModule,
        TableModule,
        DropdownModule,
        SliderModule,
        ProgressBarModule,
        MultiSelectModule,
        InputTextModule,
        CardModule,
        ContextMenuModule,
        DialogModule,
        RippleModule,
        InputMaskModule,
        CalendarModule,
        SelectButtonModule,
        PaginatorModule
    ]
})
export class PrimengModule { }

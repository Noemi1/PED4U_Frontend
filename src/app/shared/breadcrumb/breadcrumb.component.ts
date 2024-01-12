import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from './breadcrumb';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
    items: MenuItem[] = [];
    home = { icon: 'pi pi-home', routerLink: '/' };

    constructor(
        private breadcrumb: Breadcrumb
    ) {
        this.breadcrumb.items.subscribe(res => this.items = res);
    }
}

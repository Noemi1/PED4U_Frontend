import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Breadcrumb } from '../../shared/breadcrumb/breadcrumb';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrl: './initial.component.scss'
})
export class InitialComponent {
constructor (
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumb: Breadcrumb) {
    
    this.router.events.subscribe(res => {
        if (res instanceof NavigationEnd) {
            var items: MenuItem[] = [];
            this.route.snapshot.children.forEach(item => {
                if (item.title)
                    items.push({ label: item.title });
            })
            this.breadcrumb.items.next(items);
        }
    })
}
}

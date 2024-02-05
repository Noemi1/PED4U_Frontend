import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements AfterViewInit {
    sidebarVisible = false;
    @ViewChild('sidebarRef') sidebarRef!: Sidebar;
    items: MenuItem[] = [
        {
            label: 'Cadastros Gerais',
            icon: 'pi pi-fw pi-file',
            padding: 0,

            items: [
                {
                    label: 'Alunos',
                    icon: 'bi bi-backpack',
                    routerLink: 'alunos',
                    padding: 15,

                },
                {
                    label: 'Educadores',
                    icon: 'bi bi-person-video3',
                    routerLink: 'professores',
                    padding: 15,

                },
                {
                  label: 'Usuários',
                  icon: 'bi bi-person-video3',
                  routerLink: 'usuarios',
                  padding: 15,

              },
                {
                    label: 'Apostilas',
                    icon: 'bi bi-book',
                    routerLink: 'apostilas',
                    padding: 15,

                },
                {
                    label: 'Perfis',
                    icon: 'bi bi-person-badge',
                    routerLink: 'perfis',
                    padding: 15,

                },
                {
                  label: 'Turmas',
                  icon: 'bi bi-person-badge',
                  routerLink: 'turmas',
                  padding: 15,

              },
            ]
        },
        {
            label: 'Lançar aula',
            icon: 'pi pi-clock',
            routerLink: 'aulas',
            padding: 0,
        },
        {
            label: 'Gerenciar Reposições',
            icon: 'fa fa-clock-rotate-back',
            routerLink: 'reposicoes',
            padding: 0,
        },
    ];

    ngAfterViewInit(): void {
        console.log(this.sidebarRef)
    }

    closeCallback(e: any): void {
        this.sidebarRef.close(e);
    }

}

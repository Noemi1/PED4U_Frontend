import { UsuarioService } from './../../services/usuario.service';
import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Sidebar } from 'primeng/sidebar';
import { AccountService } from '../../services/account.service';
import { Login } from '../../models/account.model';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements AfterViewInit {
    sidebarVisible = false;
    login = new Login;
    userLogado?: Account;
    @Input() nome: string = '';
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
                  icon: 'pi pi-users',
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
                  icon: 'bi bi-mortarboard-fill',
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
            icon: 'bi bi-table',
            routerLink: 'reposicoes',
            padding: 0,
        },
    ];

    ngAfterViewInit(): void {
        console.log(this.sidebarRef)
    }
    constructor(
      private accountService: AccountService,
      private usuarioService: UsuarioService
    ){
      this.userLogado = this.accountService.accountValue;
    }

    closeCallback(e: any): void {
        this.sidebarRef.close(e);
    }

    sair() {
      this.accountService.logout();

  }

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Role } from '../../../../../models/account-perfil.model';
import { AccountService } from '../../../../../services/account.service';
import { UsuarioService } from '../../../../../services/usuario.service';

@Injectable({
    providedIn: 'root'
})
export class UsuarioEditableAuth implements CanActivate {
    constructor(
        private accountService: AccountService,
        private usuarioService: UsuarioService,
        private router: Router,
        private toastr: ToastrService,
    ) {

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return new Observable<boolean>(obs => {
            this.usuarioService.objeto.subscribe(res => {
                var account = this.accountService.accountValue;
                /**
                 * O usuario master pode alterar
                 * qualquer outro usuário exceto o admin
                 * O usuário backoffice não tem acesso a essa sessão
                 */
                if (account?.perfilAcesso_Id == Role.Master && res?.perfilAcesso_Id == Role.Admin) {
                    obs.next(false);
                } else {
                    obs.next(true);
                }

              });
        });

    }
}

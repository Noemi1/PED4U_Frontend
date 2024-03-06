import { UsuarioService } from '../../../../../services/usuario.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Role } from '../../../../../models/account-perfil.model';
import { AccountService } from '../../../../../services/account.service';

@Injectable({
    providedIn: 'root'
})
export class UsuarioEditableAuth implements CanActivate {
    constructor(
        private accountService: AccountService,
        private userService: UsuarioService,
        private router: Router,
        private toastr: ToastrService,
    ) {

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return new Observable<boolean>(obs => {
            this.userService.objeto.subscribe(res => {
                var account = this.accountService.accountValue;

                if (account?.perfilAcesso_Id == Role.Master && res?.perfilAcesso_Id == Role.Admin) {
                    obs.next(false);
                } else {
                    obs.next(true);
                }
            });
        });

    }
}

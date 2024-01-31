import { LoadingService } from '../../../parts/loading/loading';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { lastValueFrom } from 'rxjs';
import { Login, Register } from '../../../models/account.model';
import { AccountService } from '../../../services/account.service';
import { getError } from '../../../utils/error';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./../account.component.css']
})
export class LoginComponent {
    login = new Login;
    loading: boolean = false;
    rememberMe: boolean = false;
    showHide: boolean = false;
    err = '';
    list: Register[] = [];
    // emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    faEnvelope = faEnvelope;
    faLock = faLock;
    faUnlock = faUnlock;

    constructor(
        private accountService: AccountService,
        private loadingHelper: LoadingService,
        private router: Router
    ) {
        this.loadingHelper.loading.subscribe(res => this.loading = res);
        lastValueFrom(this.accountService.getList())
            .then(res => {
                this.loading = false
            })
            .catch(res => {
                this.loading = false
            })
        var list = accountService.list.subscribe(res => this.list = res)
        console.log(list)
    }

    send() {
        this.loadingHelper.loading.next(true);
        lastValueFrom(this.accountService.login(this.login))
            .then(res => { })
            .catch(res => {
                this.loadingHelper.loading.next(false);
                this.err = getError(res)
            });
    }

}

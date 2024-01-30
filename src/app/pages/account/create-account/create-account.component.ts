import { faChevronCircleLeft, faEnvelope, faLock, faPhone, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Register } from '../../../models/account.model';
import { NgForm } from '@angular/forms';
import { AlertService } from '../../../parts/alert/alert.service';
import { Subscription, lastValueFrom } from 'rxjs';
import { LoadingService } from '../../../parts/loading/loading';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../../models/account.model';
import { AccountService } from '../../../services/account.service';
import { getError } from '../../../utils/error';
import { OnDestroy } from '@angular/core';

@Component({
    selector: 'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./../account.component.css', './create-account.component.css']
})
export class CreateAccountComponent implements OnDestroy {
    faChevronCircleLeft = faChevronCircleLeft;
    faEnvelope = faEnvelope;
    faLock = faLock;
    faUnlock = faUnlock;
    faUser = faUser;
    faPhone = faPhone;

    objeto = new Register;
    list: Register[] = []
    loading: boolean = false;
    erro = '';
    subscription: Subscription[] = [];
    emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    constructor(
        private toastr: ToastrService,
        private router: Router,
        private loadingUtils: LoadingService,
        private accountService: AccountService,
        private alertService: AlertService,
    ) {
        var loading = this.loadingUtils.loading.subscribe(res => this.loading = res);
        this.subscription.push(loading);
    }

    ngOnDestroy(): void {
        this.subscription.forEach(item => item.unsubscribe());
    }

    send(form: NgForm) {
        this.loadingUtils.loading.next(true);
        this.objeto.acceptTerms = true;
        lastValueFrom(this.accountService.register(this.objeto))
        .then(res => {
            this.router.navigate(['account', 'login']);
            this.toastr.success('Operação concluida com sucesso!')
            this.alertService.success('Um link de verificação de conta foi enviado para o email cadastrado. Siga as instruções para completar o cadastro.');
            this.loadingUtils.loading.next(false);
            var list = this.accountService.list.subscribe(res => this.list = res)
            console.log('teste',this.objeto)
            console.log('testee', list)
        })
        .catch(res => {
            this.loadingUtils.loading.next(false);
            this.erro = getError(res);
        });
    }

}

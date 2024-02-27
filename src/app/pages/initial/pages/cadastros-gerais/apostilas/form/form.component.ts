import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apostila } from '../../../../../../models/apostilas.model';
import { lastValueFrom } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApostilaService } from '../../../../../../services/apostilas.service';
import { insertOrReplace } from '../../../../../../helpers/service-list';
import { TemplateRef, ViewChild } from '@angular/core';
import { ApostilaList } from '../../../../../../models/apostilas.model';
import { enc, SHA256 } from 'crypto-js';
import { Crypto } from '../../../../../../../utils/crypto';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  visible = true;
  loading = false;
  qtde = 1
  subscription: Subscription[] = [];
  checked: boolean = false;
  objeto: Apostila = new Apostila;
  dataVigencia: [Date, Date] = [new Date(2023, 1, 2), new Date(2023, 28, 2)];
  erro: string = '';
  list: ApostilaList[] = [];
  isEditPage = true;
  @ViewChild('template') template!: TemplateRef<any>;
  @ViewChild('icon') icon!: TemplateRef<any>;

  title = 'Cadastrar'


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private apostilaService: ApostilaService,
    private activatedRoute: ActivatedRoute,
    private crypto: Crypto,


  ) {

  }


  voltar() {
    this.visible = false;
    if (this.title == 'Editar') {
      console.log('edit')
      setTimeout(() => {
        this.router.navigate(['../..'], { relativeTo: this.route })
      }, 300);
    }
    else {
      console.log('editte')
      setTimeout(() => {
        this.router.navigate(['..'], { relativeTo: this.route })
      }, 300);
    }

  }

  change(e: any) {
    console.log(e)
    console.log(this.dataVigencia)
    console.log(this.objeto)

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const idDecrypt = this.crypto.decrypt(id);
      lastValueFrom(this.apostilaService.get(idDecrypt))
        .then(res => {
          this.objeto = res;
          if (idDecrypt  != undefined) {
            this.title = 'Editar'
          }
        })
        .catch(res => {
          this.voltar();
        })
    });
  }


  send() {
    this.loading = true;
    return lastValueFrom(this.apostilaService.post(this.objeto))
      .then(res => {
        if (res.success != false) {
          if (res.objeto) {
            insertOrReplace(this.apostilaService, res.objeto)
          } else {
            lastValueFrom(this.apostilaService.getList());
          }
        } else {
          this.erro = res.message
          this.voltar();
        }
        this.loading = false;
        this.voltar();
      })
      .catch(res => {
        console.error(res)

      })

  }

}

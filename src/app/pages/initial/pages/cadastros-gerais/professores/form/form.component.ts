import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educadores } from '../../../../../../models/educadores.model';
import { lastValueFrom } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EducadorService } from '../../../../../../services/educador.service';
import { insertOrReplace } from '../../../../../../helpers/service-list';
import { TemplateRef, ViewChild } from '@angular/core';
import { EducadoresList } from '../../../../../../models/educadores.model';
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
  objeto: Educadores = new Educadores;
  dataVigencia: [Date, Date] = [new Date(2023, 1, 2), new Date(2023, 28, 2)];
  erro: string = '';
  list: EducadoresList[] = [];
  isEditPage = true;
  @ViewChild('template') template!: TemplateRef<any>;
  @ViewChild('icon') icon!: TemplateRef<any>;

  title = 'Cadastrar'


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private educadorService: EducadorService,
    private activatedRoute: ActivatedRoute,
    private crypto: Crypto,


  ) {

  }



  voltar() {
    this.visible = false;
    if (this.title == 'Editar') {
      console.log('edit')
      setTimeout(() => {
        this.router.navigate(['../'], { relativeTo: this.route })
      }, 300);
    }
    else {
      console.log('editte')
      setTimeout(() => {
        this.router.navigate(['../'], { relativeTo: this.route })
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
    console.log(this.objeto.id)
      const id = params['id'];
      console.log(id)
      const idDecrypt = this.crypto.decrypt(id);
      lastValueFrom(this.educadorService.get(idDecrypt))
        .then(res => {
          this.objeto = res;
          if (idDecrypt != undefined) {
            this.title = 'Editar'
          }
        })
        .catch(res => {
          this.voltar();
        })
    });
  }



  send() {
    console.log('oi')
    this.visible = false;
    return lastValueFrom(this.educadorService.post(this.objeto))
      .then(res => {
        if (res.sucesso != false) {
          if (res.objeto) {
            insertOrReplace(this.educadorService, res.objeto)
          } else {
            lastValueFrom(this.educadorService.getList());
          }
          this.voltar();
        } else {
          console.log('eita')
          this.erro = res.mensagem;
          this.voltar();
        }
        this.loading = false;
        console.log(this.objeto)
      })
      .catch(res => {

        console.error(res)

      })

  }

}

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

  turmaList = [
    { id: 1, nome: 'Turma 1' },
    { id: 2, nome: 'Turma 2' },
    { id: 3, nome: 'Turma 3' },
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private apostilaService: ApostilaService,
    private activatedRoute: ActivatedRoute,
    private crypto: Crypto,


  ) {

    // this.route.params.subscribe(params => {
    //   const id = params['id'];
    //   console.log('oi', id);
    //   // Agora 'id' contém o valor passado na rota
    // });



    // this.route.params.subscribe(params => {

    //   // Faça algo com o ID, como carregar os dados do item
    // });
    // this.apostilaService.getList().subscribe(res => {
    //   this.list = Object.assign([], res);

    // });

    // console.log('teste', this.objeto)
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


  voltar() {
    this.visible = false;
    if (this.title == 'Editar') {
      setTimeout(() => {
        this.router.navigate(['../..'], { relativeTo: this.route })
      }, 300);
    }
    else {
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

  send() {
    console.log('oi')
    this.visible = false;
    return lastValueFrom(this.apostilaService.post(this.objeto))
      .then(res => {
        if (res.sucesso != false) {
          if (res.objeto) {
            insertOrReplace(this.apostilaService, res.objeto)
          } else {
            lastValueFrom(this.apostilaService.getList());
          }
          this.voltar();
        } else {
          this.erro = res.mensagem;
        }
        this.loading = false;
        setTimeout(() => {
          this.router.navigate(['..'], { relativeTo: this.route })
        }, 300);
        console.log(this.objeto)
      })
      .catch(res => {
        console.error(res)

      })

  }

}

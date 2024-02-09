import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../../../../models/usuarios.model';
import { lastValueFrom } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../../../../../services/usuario.service';
import { insertOrReplace } from '../../../../../../helpers/service-list';
import { TemplateRef, ViewChild } from '@angular/core';
import { UsuarioList } from '../../../../../../models/usuarios.model';
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
  objeto: Usuario = new Usuario;
  dataVigencia: [Date, Date] = [new Date(2023, 1, 2), new Date(2023, 28, 2)];
  erro: string = '';
  list: UsuarioList[] = [];
  isEditPage = true;
  @ViewChild('template') template!: TemplateRef<any>;
  @ViewChild('icon') icon!: TemplateRef<any>;

  title = 'Cadastrar'

  perfiList = [
    { id: 1, nome: 'educador' },
    { id: 2, nome: 'usuario' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private crypto: Crypto,


  ) {

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
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('id:', id)
      if (id != undefined) {
        const idDecrypt = this.crypto.decrypt(id);
        lastValueFrom(this.usuarioService.get(idDecrypt))
          .then(res => {
            this.objeto = res;
            if (idDecrypt != undefined) {
              this.title = 'Editar'
            }
          })
          .catch(res => {
            this.voltar();
          })
      }



    });
  }



  send() {
    this.objeto.perfilAcesso_Id = 2;
    this.visible = false;
    this.request()
      .then(res => {
        if (res.success != false) {
          if (res.objeto) {
            insertOrReplace(this.usuarioService, res.objeto)
          } else {
            lastValueFrom(this.usuarioService.getList());
          }
          this.voltar();
        } else {
          console.log('eita')
          this.erro = res.message
          this.voltar();
        }
        this.loading = false;
        console.log(this.objeto)
      })
      .catch(res => {

        console.error(res)
        this.voltar();
      })

  }


  request() {
    if (this.objeto.id == 0)
      return lastValueFrom(this.usuarioService.post(this.objeto));

    return lastValueFrom(this.usuarioService.put(this.objeto));

  }

}

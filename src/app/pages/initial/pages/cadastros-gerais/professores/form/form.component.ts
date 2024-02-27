import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educadores } from '../../../../../../models/educadores.model';
import { lastValueFrom } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { insertOrReplace } from '../../../../../../helpers/service-list';
import { TemplateRef, ViewChild } from '@angular/core';
import { EducadoresList } from '../../../../../../models/educadores.model';
import { enc, SHA256 } from 'crypto-js';
import { Crypto } from '../../../../../../../utils/crypto';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../../../../../../services/usuario.service';
import { EducadorList } from '../../../../../../models/usuarios.model';
import { Usuario } from '../../../../../../models/usuarios.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  visible = true;
  loading = false;
  subscription: Subscription[] = [];
  objeto: Usuario = new Usuario;
  dataVigencia: [Date, Date] = [new Date(2023, 1, 2), new Date(2023, 28, 2)];
  erro: string = '';
  list: EducadorList[] = [];
  isEditPage = true;
  @ViewChild('template') template!: TemplateRef<any>;
  @ViewChild('icon') icon!: TemplateRef<any>;
  title = 'Cadastrar'

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crypto: Crypto,
    private usuarioService: UsuarioService
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
      if (id != undefined) {
        const idDecrypt = this.crypto.decrypt(id);
        lastValueFrom(this.usuarioService.get(idDecrypt))
          .then(res => {
            this.objeto = res;
            console.log(this.objeto)
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




  send()
  { this.loading = true;
    this.objeto.perfilAcesso_Id = 3; // Professor
    this.request()
      .then(res => {
        if (res.success != false ) {
          if (res.objeto) {
            insertOrReplace(this.usuarioService, res.objeto, 'educador')
          } else {
            lastValueFrom(this.usuarioService.getEducador());
          }
          this.voltar();
        } else {
          this.erro = res.message
          this.voltar();
        }
        this.loading = false;
        console.log(this.objeto)
      })
      .catch(res => {
        this.voltar();
      })

  }


  request() {
    if (this.objeto.id == 0){
      return lastValueFrom(this.usuarioService.post(this.objeto));
    }
    else{
    return lastValueFrom(this.usuarioService.put(this.objeto));
    }
  }

}

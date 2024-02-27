import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from '../../../../../../models/perfil.model';
import { PerfilService } from '../../../../../../services/perfil.service';
import { lastValueFrom } from 'rxjs';
import { insertOrReplace } from '../../../../../../helpers/service-list';
import { Crypto } from '../../../../../../../utils/crypto';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  erro: string = ''
  visible = true;
  loading = false;
  objeto: Perfil = new Perfil;

  title = 'Cadastrar'
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private perfilService: PerfilService,
    private crypto: Crypto
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
    console.log(this.objeto)

  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const idDecrypt = this.crypto.decrypt(id);
      lastValueFrom(this.perfilService.get(idDecrypt))
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
    this.loading = true;
    return lastValueFrom(this.perfilService.post(this.objeto))
      .then(res => {
        if (res.success != false) {
          if (res.objeto) {
            insertOrReplace(this.perfilService, res.objeto)
          } else {
            lastValueFrom(this.perfilService.getList());
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

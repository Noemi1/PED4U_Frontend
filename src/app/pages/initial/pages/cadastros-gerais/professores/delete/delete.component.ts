import { UsuarioService } from './../../../../../../services/usuario.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducadorService } from '../../../../../../services/educador.service';
import { lastValueFrom } from 'rxjs';
import { getError } from '../../../../../../utils/error';
import { remove } from '../../../../../../helpers/service-list';
import { Crypto } from '../../../../../../../utils/crypto';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
    visible = true;
    loading = false;
    id: number = 0;
 erro: string = '';

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private educadorService: EducadorService,
        private usuarioService: UsuarioService,
        private crypto: Crypto
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        const idDecrypt = this.crypto.decrypt(id);
        console.log(idDecrypt)
        this.id = idDecrypt
      });

    }


    voltar() {
        this.visible = false;
        setTimeout(() => {
            this.router.navigate(['../../'], { relativeTo: this.route })
        }, 300);
    }

    send(event: any) {
      this.loading = true;
      this.erro = '';
      lastValueFrom(this.usuarioService.delete(this.id))
        .then(res => {
          this.loading = false;
          if (res && (res.sucesso != false || res.sucesso === undefined)) {
            if (res.objeto) {
              remove(this.usuarioService, res.objeto, 'educador');
              this.voltar();
            } else {
              lastValueFrom(this.usuarioService.getEducador());
              this.voltar();
            }
          } else {
            this.erro = res ? res.mensagem : 'Erro desconhecido';
            console.log('Erro no sucesso:', this.erro);
            lastValueFrom(this.usuarioService.getEducador());
            this.voltar();
          }
        })
        .catch(res => {
          this.loading = false;
          this.voltar();
          this.erro = getError(res);
          lastValueFrom(this.usuarioService.getEducador());
          console.error('Erro no catch:', this.erro);
          console.error('Status HTTP:', res?.response?.status);
        });
    }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { getError } from '../../../../../../utils/error';
import { remove } from '../../../../../helpers/service-list';
import { Crypto } from '../../../../../../utils/crypto';
import { ReposicaoService } from '../../../../../services/reposicao.service';
import { Reposicao } from '../../../../../models/reposicao.model';
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
    objeto: Reposicao = new Reposicao;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private crypto: Crypto,
        private reposicaoService: ReposicaoService
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

    send(event: any) {
      this.loading = true;
      this.erro = '';
      console.log('id', this.id)
      lastValueFrom(this.reposicaoService.delete(this.id))
          .then(res => {
              this.loading = false;
              if (res.success || res.success==undefined ) {
                  if (res.objeto) {
                      remove(this.reposicaoService, res.objeto)
                      this.voltar();
                  } else {
                      lastValueFrom(this.reposicaoService.getList());
                      this.voltar();
                  }
              } else {
                  this.erro = res.message
                  console.log('Erro no sucesso:', this.erro);
              }
          })
          .catch(res => {
              this.loading = false;
              this.erro = getError(res);
              console.error('Erro no catch:', this.erro);
              // Adicione um console.log para o status HTTP, se disponível
              console.error('Status HTTP:', res?.response?.status);
          })
  }

    voltar() {
        this.visible = false;
        setTimeout(() => {
            this.router.navigate(['../../'], { relativeTo: this.route })
        }, 300);
    }
}

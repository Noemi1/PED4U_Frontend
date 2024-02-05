import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { lastValueFrom } from 'rxjs';
import { getError } from '../../../../../../utils/error';
import { remove } from '../../../../../helpers/service-list';

import { AulaService } from '../../../../../services/aula.service';
import { Aula } from '../../../../../models/aula.model';
import { Crypto } from '../../../../../../utils/crypto';

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
  objeto: Aula = new Aula;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private aulaService: AulaService,
    private crypto: Crypto,
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
    lastValueFrom(this.aulaService.delete(this.id))
        .then(res => {
            this.loading = false;
            if (res.sucesso || res.sucesso==undefined ) {
                if (res.objeto) {
                    remove(this.aulaService, res.objeto)
                    this.voltar();
                } else {
                    lastValueFrom(this.aulaService.getList());
                    this.voltar();
                }
            } else {
                this.erro = res.mensagem;
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
    this.router.navigate(['../..'], { relativeTo: this.route })

  }

}

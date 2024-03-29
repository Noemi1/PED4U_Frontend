import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApostilaService } from '../../../../../../services/apostilas.service';
import { lastValueFrom } from 'rxjs';
import { getError } from '../../../../../../utils/error';
import { remove } from '../../../../../../helpers/service-list';
import { Crypto } from '../../../../../../../utils/crypto';
import { Apostila } from '../../../../../../models/apostilas.model';
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
  objeto: Apostila = new Apostila;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apostilaService: ApostilaService,
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
    lastValueFrom(this.apostilaService.delete(this.id))
        .then(res => {
            this.loading = false;
            if (res.success || res.success==undefined ) {
                if (res.objeto) {
                    remove(this.apostilaService, res.objeto)
                    this.voltar();
                } else {
                    lastValueFrom(this.apostilaService.getList());
                    this.voltar();
                }
            } else {
                this.erro = res.message
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

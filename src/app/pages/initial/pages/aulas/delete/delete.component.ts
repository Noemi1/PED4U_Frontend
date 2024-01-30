import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApostilaService } from '../../../../../services/apostilas.service';
import { lastValueFrom } from 'rxjs';
import { getError } from '../../../../../utils/error';
import { remove } from '../../../../../helpers/service-list';
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
    private apostilaService: ApostilaService
  ) {

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
    console.log('teste')
    lastValueFrom(this.apostilaService.delete(this.id))
      .then(res => {
        this.loading = false;
        if (res.sucesso) {
          if (res.objeto) {
            remove(this.apostilaService, res.objeto)
          } else {
            lastValueFrom(this.apostilaService.getList());
          }
          this.voltar();
        } else {
          this.erro = res.mensagem;
        }
      })
      .catch(res => {
        this.loading = false;
        this.erro = getError(res);
      })
  }
}

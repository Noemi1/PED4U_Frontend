import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from '../../../../../../models/perfil.model';
import { PerfilService } from '../../../../../../services/perfil.service';
import { lastValueFrom } from 'rxjs';
import { insertOrReplace } from '../../../../../../helpers/service-list';
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
    dataVigencia: [Date, Date] = [new Date(2023, 1, 2), new Date(2023, 28, 2)];
    sexoList = [
      { id: 1, nome: 'Feminino' },
      { id: 2, nome: 'Masculino' },
      { id: 3, nome: 'Outro' },
  ]
    perfiList = [
        { id: 1, nome: 'Perfil 1' },
        { id: 2, nome: 'Perfil 2' },
        { id: 3, nome: 'Perfil 3' },
    ];
    educadorList = [
        { id: 1, nome: 'Educador 1' },
        { id: 2, nome: 'Educador 2' },
        { id: 3, nome: 'Educador 3' },
    ];

    turmaList = [
      { id: 1, nome: 'Turma 1' },
      { id: 2, nome: 'Turma 2' },
      { id: 3, nome: 'Turma 3' },
  ];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private perfilService: PerfilService
    ) {

    }

    voltar() {
        this.visible = false;
        setTimeout(() => {
            this.router.navigate(['..'], { relativeTo: this.route })
        }, 300);
    }
    change(e: any) {
        console.log(e)
        console.log(this.dataVigencia)
        console.log(this.objeto)

    }

    send() {
      console.log('oi')
      this.visible = false;
      return lastValueFrom(this.perfilService.post(this.objeto))
        .then(res => {
          if (res.sucesso != false) {
            if (res.objeto) {
              insertOrReplace(this.perfilService, res.objeto)
            } else {
              lastValueFrom(this.perfilService.getList());
            }
            this.voltar();
          } else {
            this.erro = res.mensagem;
            this.voltar();
          }
          this.loading = false;
          // setTimeout(() => {
          //   this.router.navigate(['..'], { relativeTo: this.route })
          // }, 300);
          console.log(this.objeto)
        })
        .catch(res => {
          console.error(res)

        })

    }

}

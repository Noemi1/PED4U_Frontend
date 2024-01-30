import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aula } from '../../../../../models/aula.model';
import { lastValueFrom } from 'rxjs';
import { AulaService } from '../../../../../services/aula.service';
import { insertOrReplace } from '../../../../../helpers/service-list';
import { Crypto } from '../../../../../../utils/crypto';
import { AulaList } from '../../../../../models/aula.model';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss'
})
export class FormComponent {
    visible = true;
    loading = false;
    qtde = 1
    objeto: Aula = new Aula;
    dataVigencia: [Date, Date] = [new Date(2023, 1, 2), new Date(2023, 28, 2)];
    erro: string = ''
    list: AulaList[] = [];
    sexoList = [
        { id: 1, nome: 'Feminino' },
        { id: 2, nome: 'Masculino' },
        { id: 3, nome: 'Outro' },
    ]
    educadorList = [
        { id: 1, nome: 'Perfil 1' },
        { id: 2, nome: 'Perfil 2' },
        { id: 6, nome: 'Perfil 3' },
    ];
    turmaList = [
        { id: 3, nome: 'Turma 1' },
        { id: 2, nome: 'Turma 2' },
        { id: 1, nome: 'Turma 3' },
    ];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private aulaService: AulaService,
        private crypto: Crypto
    ) {
  this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('oi', id);
      // Agora 'id' contém o valor passado na rota
    });



    this.route.params.subscribe(params => {

      // Faça algo com o ID, como carregar os dados do item
    });
    this.aulaService.getList().subscribe(res => {
      this.list = Object.assign([], res);

    });

    console.log('teste', this.objeto)

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        const idDecrypt = this.crypto.decrypt(id);
        lastValueFrom(this.aulaService.get(idDecrypt))
          .then(res => {
            this.objeto = res;
            if (idDecrypt  != undefined) {
              // this.title = 'Editar'
            }
          })
          .catch(res => {
            this.voltar();
          })
      });



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
      return lastValueFrom(this.aulaService.post(this.objeto))
        .then(res => {
          if (res.sucesso != false) {
            if (res.objeto) {
              insertOrReplace(this.aulaService, res.objeto)
            } else {
              lastValueFrom(this.aulaService.getList());
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

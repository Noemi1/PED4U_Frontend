import { Reposicao } from './../../../../../models/reposicao.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReposicaoService } from '../../../../../services/reposicao.service';

import { lastValueFrom } from 'rxjs';
import { Crypto } from '../../../../../../utils/crypto';
import { insertOrReplace } from '../../../../../helpers/service-list';
import { Aula } from '../../../../../models/aula.model';
import { AlunoAulaRel, AlunoAulaRelList } from '../../../../../models/aluno.Aula.Rel.model';
import { AulaService } from '../../../../../services/aula.service';
import { Subscription } from 'rxjs';
import { AlunoAulaRelService } from '../../../../../services/alunoAulaRel.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  erro: string = ''
  visible = true;
  loading = false;
  qtde = 1
  title = 'Cadastrar'
  objeto: Reposicao = new Reposicao;
  dataVigencia: [Date, Date] = [new Date(2023, 1, 2), new Date(2023, 28, 2)];
// tem que referenciar aluno_aula_rel
  aulas: AlunoAulaRelList[] = [];
  loadingBanco = true;
  bancoSelected?: Aula;

  subscription: Subscription[] = [];

  turmaList = [
    { id: 9, nome: 'Turma 1' },
    { id: 2, nome: 'Turma 2' },
    { id: 3, nome: 'Turma 3' },
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reposicaoService: ReposicaoService,
    private crypto: Crypto,
    private alunoAulaRelService : AlunoAulaRelService
  ) {


    lastValueFrom(this.alunoAulaRelService.getList())
    .then(res => {
        this.loadingBanco = false;
        this.aulas = res
    });

var aulas = this.alunoAulaRelService.list.subscribe(res => this.aulas = res);
this.subscription.push(aulas);

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const idDecrypt = this.crypto.decrypt(id);
      lastValueFrom(this.reposicaoService.get(idDecrypt))
        .then(res => {
          this.objeto = res;
          if (idDecrypt  != undefined) {
            this.title = 'Editar'
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
    return lastValueFrom(this.reposicaoService.post(this.objeto))
      .then(res => {
        if (res.sucesso != false) {
          if (res.objeto) {
            insertOrReplace(this.reposicaoService, res.objeto)
          } else {
            lastValueFrom(this.reposicaoService.getList());
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

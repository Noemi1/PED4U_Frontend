import { Reposicao } from './../../../../../models/reposicao.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReposicaoService } from '../../../../../services/reposicao.service';
import { lastValueFrom } from 'rxjs';
import { Crypto } from '../../../../../../utils/crypto';
import { insertOrReplace } from '../../../../../helpers/service-list';
import { Aula } from '../../../../../models/aula.model';
import { AlunoAulaRel, AlunoAulaRelList } from '../../../../../models/aluno.Aula.Rel.model';
import { Subscription } from 'rxjs';
import { AlunoAulaRelService } from '../../../../../services/alunoAulaRel.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  erro: string = ''
  visible = false;
  loading = false;
  qtde = 1
  title = 'Cadastrar'
  objeto: Reposicao = new Reposicao;
  dataVigencia: [Date, Date] = [new Date(2023, 1, 2), new Date(2023, 28, 2)];
  aulas: AlunoAulaRelList[] = [];
  loadingAulas = true;
  subscription: Subscription[] = [];
  dialogAlreadyOpen: boolean = false;
  loc = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reposicaoService: ReposicaoService,
    private crypto: Crypto,
    private alunoAulaRelService: AlunoAulaRelService,
  ) {

    lastValueFrom(this.alunoAulaRelService.getList())
      .then(res => {
        this.loadingAulas = false;
        this.aulas = res
      });

      var aulas = this.alunoAulaRelService.list.subscribe(res => this.aulas = res);
      this.subscription.push(aulas);
  }


  ngAfterViewInit(): void {
    // const visivel = localStorage.getItem('loc');
    // const acaoRealizada = visivel === 'true';
    // console.log(acaoRealizada)
    // if (acaoRealizada) {
    //   // Realizar a ação
    //   this.visible = true
    //   console.log('oi')
    //   // Marcar a ação como realizada no armazenamento local
    //   localStorage.setItem('loc', 'true');
    // }
this.visible = true
    console.log('visible',this.visible)



    this.route.params.subscribe(params => {
      const id = params['id'];
      const idDecrypt = this.crypto.decrypt(id);
      console.log('id', idDecrypt)
      lastValueFrom(this.reposicaoService.get(idDecrypt))
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


  voltar() {
    console.log('voltar')
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


  send() {
    this.loading = true;
    return lastValueFrom(this.reposicaoService.post(this.objeto))
      .then(res => {
        if (res.success != false) {
          if (res.objeto) {
            insertOrReplace(this.reposicaoService, res.objeto)
          } else {
            lastValueFrom(this.reposicaoService.getList());
          }
          this.voltar();
        } else {
          this.erro = res.message
        }
        this.loading = false;

      })
      .catch(res => {
        console.error(res)
      })
  }
}

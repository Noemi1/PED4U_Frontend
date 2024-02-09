import { TurmasService } from './../../../../../../services/turmas.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../../../../../../models/aluno.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AlunoService } from '../../../../../../services/aluno.service';
import { lastValueFrom } from 'rxjs';
import { insertOrReplace } from '../../../../../../helpers/service-list';
import { formatDate } from '@angular/common';
import { format } from 'date-fns';
import { Crypto } from '../../../../../../../utils/crypto';
import { TurmasList } from '../../../../../../models/turma.model';
import { Subscription } from 'rxjs';
import { PerfilService } from '../../../../../../services/perfil.service';
import { PerfilList } from '../../../../../../models/perfil.model';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss'
})
export class FormComponent {
    visible = true;
    loading = false;
    objeto: Aluno = new Aluno;
    title = 'Cadastrar'
    erro: string = '';
    dataVigencia: [Date, Date] = [new Date(2023, 1, 2), new Date(2023, 28, 2)];
    datasString: string[] = this.dataVigencia.map(date => date.toISOString().slice(0, 10));
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
    turmaList = [
        { id: 1, nome: 'Turma 1' },
        { id: 2, nome: 'Turma 2' },
        { id: 3, nome: 'Turma 3' },
    ];

    turmas: TurmasList[] = [];
    loadingTurmas = true;
    subscription: Subscription[] = [];

    perfis: PerfilList[] = [];
    loadingperfis = true;





    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private alunoService: AlunoService,
        private crypto: Crypto,
        private turmasService: TurmasService,
        private perfilService: PerfilService
    ) {
      lastValueFrom(this.turmasService.getList())
      .then(res => {
        this.loadingTurmas = false;
        this.turmas = res
      });
    var turmas = this.turmasService.list.subscribe(res => this.turmas = res);
    this.subscription.push(turmas);

    lastValueFrom(this.perfilService.getList())
    .then(res => {
      this.loadingperfis = false;
      this.perfis = res
    });
  var perfis = this.perfilService.list.subscribe(res => this.perfis = res);
  this.subscription.push(perfis);
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        const idDecrypt = this.crypto.decrypt(id);
        lastValueFrom(this.alunoService.get(idDecrypt))
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
      this.visible = false;
      if (this.title == 'Editar') {
        console.log('edit')
        setTimeout(() => {
          this.router.navigate(['../..'], { relativeTo: this.route })
        }, 300);
      }
      else {
        console.log('editte')
        setTimeout(() => {
          this.router.navigate(['..'], { relativeTo: this.route })
        }, 300);
      }

    }
    change(e: any) {
        console.log(e)
        console.log(this.dataVigencia)
        this.objeto.data_Vigencia_Inicial = this.datasString[0];
        this.objeto.data_Vigencia_Final = this.datasString[1];
        console.log(this.objeto)
    }

    send() {
      console.log(this.datasString);
      const dataNascimentoFormatada = format(new Date(this.objeto.dataNascimento), 'yyyy-MM-dd');

      this.objeto.dataNascimento = dataNascimentoFormatada
      this.visible = false;
      return lastValueFrom(this.alunoService.post(this.objeto))
        .then(res => {
          if (res.sucesso != false) {
            if (res.objeto) {
              insertOrReplace(this.alunoService, res.objeto)
            } else {
              lastValueFrom(this.alunoService.getList());
            }
            this.voltar();
          } else {
            this.erro = res.mensagem;
          }
          this.loading = false;

          console.log(this.objeto)
        })
        .catch(res => {
          console.error(res)
        })

    }

}

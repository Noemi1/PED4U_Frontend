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

  sexoList = [
    { id: 1, nome: 'Masculino' },
    { id: 2, nome: 'Feminino' },

  ]

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

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const id = params['id'];

      const idDecrypt = this.crypto.decrypt(id);
      lastValueFrom(this.alunoService.get(idDecrypt))
        .then(res => {
          this.objeto = res;
          if (idDecrypt != undefined) {
            console.log(this.objeto.dataNascimento)
            this.title = 'Editar';
            const dataNascimentoFormatada = formatDate(this.objeto.dataNascimento, 'dd/MM/yyyy', 'en-US');
            this.objeto.dataNascimento = dataNascimentoFormatada;
            const dataVI = new Date(this.objeto.data_Vigencia_Inicial + 'T00:00:00')
            const dataVF = new Date(this.objeto.data_Vigencia_Final + 'T00:00:00')
            this.dataVigencia = [dataVI, dataVF]


          }
        })
        .catch(res => {
          this.voltar();
        });
    });
  }


  voltar() {
    this.visible = false;
    console.log(this.visible)
    if (this.title == 'Editar') {
      setTimeout(() => {
        this.router.navigate(['../..'], { relativeTo: this.route })
      }, 320);
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
    console.log(this.objeto.dataNascimento)
    console.log(this.objeto)


    const dataVIFormatada = format(new Date(this.dataVigencia[0]), 'yyyy-MM-dd');
    this.objeto.data_Vigencia_Inicial = dataVIFormatada;

    const dataVFFormatada = format(new Date(this.dataVigencia[1]), 'yyyy-MM-dd');
    this.objeto.data_Vigencia_Final = dataVFFormatada;

  }



  send() {
    console.log('objeto:', this.objeto)
    // Convertendo a data de nascimento para o formato esperado pelo serviço
    const dataNascimentoFormatada = format(new Date(this.objeto.dataNascimento), 'yyyy-MM-dd');
    this.objeto.dataNascimento = dataNascimentoFormatada;

    console.log(this.objeto.dataNascimento)
    this.loading = true;
    return lastValueFrom(this.alunoService.post(this.objeto))
      .then(res => {
        if (res.success != false) {
          if (res.objeto) {
            insertOrReplace(this.alunoService, res.objeto);
          } else {
            lastValueFrom(this.alunoService.getList());
          }
          this.voltar();
        } else {
          this.erro = res.message;
        }
        this.loading = false;

      })
      .catch(error => {
        console.error(error);
      });
  }


}

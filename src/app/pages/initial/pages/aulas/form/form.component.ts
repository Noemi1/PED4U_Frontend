
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aula } from '../../../../../models/aula.model';
import { lastValueFrom } from 'rxjs';
import { AulaService } from '../../../../../services/aula.service';
import { insertOrReplace } from '../../../../../helpers/service-list';
import { Crypto } from '../../../../../../utils/crypto';
import { AulaList } from '../../../../../models/aula.model';
import { DatePipe } from '@angular/common';
import { format } from 'date-fns';
import { TurmasList } from '../../../../../models/turma.model';
import { TurmasService } from '../../../../../services/turmas.service';
import { Subscription } from 'rxjs';
import { EducadorService } from '../../../../../services/educador.service';
import { EducadorList } from '../../../../../models/usuarios.model';
import { formatDate } from '@angular/common';
import { AlunoAulaRel } from '../../../../../models/aluno.Aula.Rel.model';
import { AlunoAulaRelService } from '../../../../../services/alunoAulaRel.service';
import { LancarAula } from '../../../../../models/lancar-aula.model';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  visible = true;
  loading = false;
  idTurma: number = 0
  qtde = 1
  objeto: LancarAula = new LancarAula;
  erro: string = ''
  list: AulaList[] = [];
  turmas: TurmasList[] = [];
  educadores: EducadorList[] = [];
  loadingTurmas = true;
  loadingEducador = true;
  booleanList = [
    { boolean: true, nome: 'Sim' },
    { boolean: false, nome: 'Não' },

  ]
  maximized = false


  subscription: Subscription[] = [];

  title = 'Criar aula'
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private aulaService: AulaService,
    private crypto: Crypto,
    private datepipe: DatePipe,
    private turmaService: TurmasService,
    private educadorService: EducadorService,
    private alunoAulaRel: AlunoAulaRelService,
    private aulaLista: ListComponent
  ) {

    console.log('teste',this.objeto)

    this.route.params.subscribe(params => {

      const id = parseInt(params['turma_id'], 10);
      this.idTurma = id
      console.log('tst',this.idTurma)
      lastValueFrom(this.aulaService.getList(true, id))
        .then(res => {


        })
        .catch(res => {
          this.voltar();
        })
    });

    lastValueFrom(this.turmaService.getList())
      .then(res => {
        this.loadingTurmas = false;
        this.turmas = res
      });

    var turmas = this.turmaService.list.subscribe(res => this.turmas = res);
    this.subscription.push(turmas);

    lastValueFrom(this.educadorService.getList())
      .then(res => {
        this.loadingEducador = false;
        this.educadores = res
      });

    var educadores = this.educadorService.list.subscribe(res => this.educadores = res);
    this.subscription.push(educadores);

    this.route.params.subscribe(params => {
      const id = params['id'];
      // Agora 'id' contém o valor passado na rota
    });



    this.route.params.subscribe(params => {
      // Faça algo com o ID, como carregar os dados do item
    });
    // this.aulaService.getList().subscribe(res => {
    //   this.list = Object.assign([], res);
    // });

  }



  onIdClicadoChanged(id: number | undefined) {
    // Faça o que for necessário com o novo valor de idClicado
    console.log('Novo valor de idClicado:', id);

  }

  teste() {
    this.maximized = true
  }
  ngOnInit() {
    this.onIdClicadoChanged
    // faz o primeiro post
    this.objeto.aula.turma_Id = this.idTurma // Pega o id da turma da url
    console.log('turmaid',this.objeto.aula.turma_Id, this.objeto)
    lastValueFrom(this.aulaService.post(this.objeto))
      // .then(res => {
      //   this.objeto = res.objeto;
      // })



    // this.route.params.subscribe(params => {
    //   const id = params['id'];
    //   const idDecrypt = this.crypto.decrypt(id);
    //   lastValueFrom(this.aulaService.getList(true, id))
    //     .then(res => {

    //       if (idDecrypt != undefined) {
    //         console.log(this.objeto.aula.data)
    //         const dataNascimentoFormatada = formatDate(this.objeto.aula.data, 'dd/MM/yyyy', 'en-US');
    //         this.objeto.aula.data = dataNascimentoFormatada;
    //         this.title = 'Editar aula'
    //       }
    //     })
    //     .catch(res => {
    //       this.voltar();
    //     })
    // });
  }

  change(e: any) {
    console.log(e)
    console.log(this.objeto)


  }



  send() {
    this.loading = true
    return lastValueFrom(this.aulaService.post(this.objeto))
      .then(res => {
        if (res.success != false) {
          if (res.objeto) {
            insertOrReplace(this.aulaService, res.objeto)
          } else {
            // lastValueFrom(this.aulaService.getList());

          }
          this.voltar();
        } else {
          this.erro = res.message
        }
        this.loading = false;

        console.log(this.objeto)
      })
      .catch(res => {
        console.error(res)

      })
  }





  voltar() {
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


}


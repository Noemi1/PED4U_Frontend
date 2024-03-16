

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
import { Turmas, TurmasList } from '../../../../../models/turma.model';
import { TurmasService } from '../../../../../services/turmas.service';
import { Subscription } from 'rxjs';
import { EducadorService } from '../../../../../services/educador.service';
import { EducadorList } from '../../../../../models/usuarios.model';
import { formatDate } from '@angular/common';
import { AlunoAulaRel } from '../../../../../models/aluno.Aula.Rel.model';
import { AlunoAulaRelService } from '../../../../../services/alunoAulaRel.service';
import { LancarAula } from '../../../../../models/lancar-aula.model';
import { ListComponent } from '../list/list.component';
import { RelsColumns } from '../../../../../models/lancar-aula.model';
import { ApostilaList } from '../../../../../models/apostilas.model';
import { ApostilaService } from '../../../../../services/apostilas.service';
import { SelectItem } from 'primeng/api';
import { Input } from '@angular/core';
import { Table } from 'primeng/table';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  columns = RelsColumns
  list: AlunoAulaRel[] = []
  visible = true;
  loading = false;
  idTurma: number = 0
  qtde = 1
  objeto: LancarAula = new LancarAula;
  erro: string = ''
  turmas: TurmasList[] = [];
  educadores: EducadorList[] = [];
  loadingTurmas = true;
  loadingEducador = true;
  booleanList = [
    { boolean: true, nome: 'Sim' },
    { boolean: false, nome: 'Não' },

  ]
  @Input() sortTable = true;
  @Output() postCompleted = new EventEmitter<void>();


  diaList = [
    { id: 1, nome: 'Sim' },
    { id: 2, nome: 'Nao' },
  ]

  matchModeOptions: SelectItem<any>[] = [
    { label: 'Começa com', value: 'startsWith' },
    { label: 'Contém', value: 'contains' },
    { label: 'Igual a', value: 'equals' },
    { label: 'Diferente de', value: 'notEquals' },
    { label: 'Termina com', value: 'endsWith' },
    { label: 'Dentro de', value: 'in' },
    { label: 'Menor que', value: 'lt' },
    { label: 'Menor ou igual a', value: 'lte' },
    { label: 'Maior que', value: 'gt' },
    { label: 'Maior ou igual a', value: 'gte' },
    { label: 'É', value: 'is' },
    { label: 'Não é', value: 'isNot' },
    { label: 'Antes', value: 'before' },
    { label: 'Depois', value: 'after' }
  ];

  maximized = false
  turma: any
  educadorId: number = 0
  rels: any
  relsValues: any
  subscription: Subscription[] = [];
  dataAtual: any
  title = 'Criar aula'
  titleRels = 'Rels'
  apostilas: ApostilaList[] = [];
  cleaned: boolean = false;
  @Output() dadosAtualizados = new EventEmitter<void>();
  apostila: any
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private aulaService: AulaService,
    private crypto: Crypto,
    private datepipe: DatePipe,
    private turmaService: TurmasService,
    private educadorService: EducadorService,
    private alunoAulaRel: AlunoAulaRelService,
    private aulaLista: ListComponent,
    private datePipe: DatePipe,
    private apostilasService: ApostilaService,

  ) {

    lastValueFrom(this.apostilasService.getList())
      .then(res => {
        // this.loadingEducador = false;
        this.apostilas = res
      });

    var apostilas = this.apostilasService.list.subscribe(res => this.apostilas = res);
    console.log(apostilas)
    this.subscription.push(apostilas);



    this.route.params.subscribe(params => {

      const id = parseInt(params['turma_id'], 10);
      this.idTurma = id
      lastValueFrom(this.aulaService.getList(true, id))
        .then(res => {
          console.log('aulservice get list', res)


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




  voltarRels() {
    this.router.navigate(['../..'], { relativeTo: this.route })
  }

  onInputChange(event: any) {
    console.log('Valor do input mudou:', event.target.value);
    this.cleaned = false
  }

  clear(table: Table): void {
    table.clear();
    console.log(this.cleaned)
    this.cleaned = true
    console.log(table, this.cleaned)

  }
  ngOnInit() {

    // faz o primeiro post
    lastValueFrom(this.turmaService.get(this.idTurma)).then(res => {
      this.turma = res;
      this.educadorId = this.turma.educador_Id.toString()
      const currentDate = new Date();
      const dataAtual = formatDate(currentDate, 'yyyy-MM-dd', 'en-US');
      this.objeto.aula.data = dataAtual
      this.objeto.aula.turma_Id = this.idTurma // Pega o id da turma da url
      console.log('turmaid', this.objeto.aula.turma_Id, this.objeto)
      this.objeto.aula.educador_Id = this.educadorId
      lastValueFrom(this.aulaService.post(this.objeto)).then(res => {
        console.log(this.objeto)
        this.rels = res
        this.relsValues = this.rels.rels
        console.log(this.relsValues);

      })
      this.postCompleted.emit();
    }
    )
  }

  getTeste() {
    console.log(this.apostilas)
  }

  getApostila(id: number) {
    const aluno = this.apostilas.find(aluno => aluno.id === id);
    return aluno ? aluno.nome : '';
    // Consulta o serviço para obter a apostila com base no ID
    // lastValueFrom(this.apostilasService.get(id)).then(res =>{
    //   this.apostila = res;
    //   console.log('teste',id,'testeee',this.apostila)
    // })


    // Verifica se a apostila foi encontrada
    // if (apostila) {
    //   // Retorna o nome da apostila
    //   return apostila.n;
    // } else {

    //   return 'Apostila não encontrada';
    // }
  }

  boolean(bool: boolean) {
    if (bool == true) {
      return 'Sim'
    }
    else {
      return 'Não'
    }
  }

  salvarDados(event: any) {
    console.log(this.relsValues)
    this.objeto.rels = this.relsValues
    console.log('test234e', this.objeto)
    lastValueFrom(this.aulaService.post(this.objeto))

    // lastValueFrom(this.aulaService.post(this.relsValues))
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


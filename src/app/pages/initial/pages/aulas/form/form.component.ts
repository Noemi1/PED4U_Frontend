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
  turmas: TurmasList[] = [];
  loadingTurmas = true;
  sexoList = [
    { id: 1, nome: 'Feminino' },
    { id: 2, nome: 'Masculino' },
    { id: 3, nome: 'Outro' },
  ]
  educadorList = [
    { id: 6, nome: 'Perfil 1' },
    { id: 2, nome: 'Perfil 2' },
    { id: 6, nome: 'Perfil 3' },
  ];
  turmaList = [
    { id: 26, nome: 'Turma 1' },
    { id: 2, nome: 'Turma 2' },
    { id: 1, nome: 'Turma 3' },
  ];


  subscription: Subscription[] = [];

  title = 'Cadastrar'
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private aulaService: AulaService,
    private crypto: Crypto,
    private datepipe: DatePipe,
    private turmaService: TurmasService
  ) {

    lastValueFrom(this.turmaService.getList())
      .then(res => {
        this.loadingTurmas = false;
        this.turmas = res
      });

    var turmas = this.turmaService.list.subscribe(res => this.turmas = res);
    console.log(turmas)
    this.subscription.push(turmas);

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


  change(e: any) {
    console.log(e)
    console.log(this.dataVigencia)
    console.log(this.objeto)

  }

  send() {
    const dataFormatada = format(new Date(this.objeto.data), 'yyyy-MM-dd hh:mm');
    console.log('oi', this.objeto.data, dataFormatada)
    this.objeto.data = dataFormatada
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
        console.log(this.objeto)
      })
      .catch(res => {
        console.error(res)

      })
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const idDecrypt = this.crypto.decrypt(id);
      lastValueFrom(this.aulaService.get(idDecrypt))
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


}


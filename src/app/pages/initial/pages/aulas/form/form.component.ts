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
  erro: string = ''
  list: AulaList[] = [];
  turmas: TurmasList[] = [];
  educadores: EducadorList[] = [];
  loadingTurmas = true;
  loadingEducador = true;
  sexoList = [
    { id: 1, nome: 'Feminino' },
    { id: 2, nome: 'Masculino' },
    { id: 3, nome: 'Outro' },
  ]


  subscription: Subscription[] = [];

  title = 'Cadastrar'
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private aulaService: AulaService,
    private crypto: Crypto,
    private datepipe: DatePipe,
    private turmaService: TurmasService,
    private educadorService: EducadorService
  ) {

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
    this.aulaService.getList().subscribe(res => {
      this.list = Object.assign([], res);
    });

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const idDecrypt = this.crypto.decrypt(id);
      lastValueFrom(this.aulaService.get(idDecrypt))
        .then(res => {
          this.objeto = res;
          if (idDecrypt != undefined) {
            console.log(this.objeto.data)
            const dataNascimentoFormatada = formatDate(this.objeto.data, 'dd/MM/yyyy', 'en-US');
            this.objeto.data = dataNascimentoFormatada;
            this.title = 'Editar'
          }
        })
        .catch(res => {
          this.voltar();
        })
    });
  }

  change(e: any) {
    console.log(e)
    console.log(this.objeto)
    console.log(this.objeto.data)

  }

  send() {
    this.visible = false;
    return lastValueFrom(this.aulaService.post(this.objeto))
      .then(res => {
        if (res.success != false) {
          if (res.objeto) {
            insertOrReplace(this.aulaService, res.objeto)
          } else {
            lastValueFrom(this.aulaService.getList());
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


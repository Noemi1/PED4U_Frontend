import { PerfilService } from './../../../../../../services/perfil.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Turmas } from '../../../../../../models/turma.model';
import { TurmasService } from '../../../../../../services/turmas.service';
import { insertOrReplace } from '../../../../../../helpers/service-list';
import { lastValueFrom } from 'rxjs';
import { Crypto } from '../../../../../../../utils/crypto';
import { EducadorService } from '../../../../../../services/educador.service';
import { EducadorList } from '../../../../../../models/usuarios.model';
import { Subscription } from 'rxjs';
import { PerfilList } from '../../../../../../models/perfil.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  visible = true;
  selectedDate: Date = new Date()
  time: string = '';
  loading = false;
  erro: string = '';
  objeto: Turmas = new Turmas;
  dataVigencia: [Date, Date] = [new Date(2023, 1, 2), new Date(2023, 28, 2)];
  dateWithSeconds: Date;

  educadores: EducadorList[] = [];
  loadingEducador = true;


  title = 'Cadastrar'
  subscription: Subscription[] = [];

  diaList = [
    { id: 1, nome: 'Segunda-Feira' },
    { id: 2, nome: 'Terça-Feira' },
    { id: 3, nome: 'Quarta-Feira' },
    { id: 4, nome: 'Quinta-Feira' },
    { id: 5, nome: 'Sexta-Feira' },
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private turmaService: TurmasService,
    private crypto: Crypto,
    private educadorService: EducadorService,

  ) {
    this.dateWithSeconds = new Date();

    lastValueFrom(this.educadorService.getList())
    .then(res => {
      this.loadingEducador = false;
      this.educadores = res
    });

  var educadores = this.educadorService.list.subscribe(res => this.educadores = res);
  console.log(educadores)
  this.subscription.push(educadores);

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const idDecrypt = this.crypto.decrypt(id);
      console.log(this.objeto.id)
      lastValueFrom(this.turmaService.get(idDecrypt))
        .then(res => {
          this.objeto = res;
          console.log(this.objeto)
          if (idDecrypt != undefined) {
            console.log('testesteste', this.objeto)
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

  onChange(value: string) {
    // Você pode processar a string do valor aqui, dividindo-a em hora, minuto e segundo conforme necessário
    console.log(value);
  }
  send() {
    if (!this.objeto.horario.endsWith(':00')) {
      this.objeto.horario += ':00';
    }
    this.visible = false;


    return lastValueFrom(this.turmaService.post(this.objeto))
      .then(res => {
        if (res.success != false) {
          if (res.objeto) {
            insertOrReplace(this.turmaService, res.objeto)
          } else {
            lastValueFrom(this.turmaService.getList());
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

}

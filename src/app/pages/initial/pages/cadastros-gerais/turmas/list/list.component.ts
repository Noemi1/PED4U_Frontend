import { Component, Output, EventEmitter } from '@angular/core';
import { TurmasService } from '../../../../../../services/turmas.service';
import { lastValueFrom, Subscription } from 'rxjs';
import { TurmasList } from '../../../../../../models/turma.model';
import { turmasColumns } from '../../../../../../models/turma.model';
import { Crypto } from '../../../../../../../utils/crypto';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Turmas } from '../../../../../../models/turma.model';
import { AulaService } from '../../../../../../services/aula.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Output() idExportChanged: EventEmitter<number | undefined> = new EventEmitter<number | undefined>();
  columns = turmasColumns;
  title = 'Turmas'
  list: TurmasList[] = [];
  idExport: any;
  loading: boolean = true;
  subscription: Subscription[] = []
  objeto: Turmas = new Turmas;
  visible = true;

  // idClicado: number = 0
  PerfilAulas = true;
  idClicado!: number | undefined;
  constructor(
    private turmaService: TurmasService,
    private router: Router,
    private route: ActivatedRoute,
    private crypto: Crypto,
    private aulaService: AulaService
  ) {
    var list = this.turmaService.list.subscribe(res => {

      this.list = Object.assign([], res)
      this.formatarDia()
    });
    this.subscription.push(list);
    lastValueFrom(this.turmaService.getList(true));
  }

  navigateToAulas(objeto: Turmas) {
    // this.router.navigate(['lançar'], { relativeTo: this.route });
    console.log(objeto.id)

  }

  formatarDia() {
    this.list.forEach(turma => {
      if (turma.diaSemana == 1) {
        turma.diaSemana = 'Segunda-feira' as any

      }
      else if (turma.diaSemana == 2) {
        turma.diaSemana = 'Terça-feira' as any

      }
      else if (turma.diaSemana == 3) {
        turma.diaSemana = 'Quarta-feira' as any

      }
      else if (turma.diaSemana == 4) {
        turma.diaSemana = 'Quinta-feira' as any

      }
      else if (turma.diaSemana == 5) {
        turma.diaSemana = 'Sexta-feira' as any

      }

    });
  }
  get() {
    lastValueFrom(this.turmaService.getList(true));
  }

  update(): void {
    this.loading = true
    this.get
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  rotaAula() {
    console.log('oi')
  }


  onIdClicadoChanged(id: number | undefined) {
    console.log('retorn: ', id)
    this.idExport = id
  localStorage.setItem('idExport', JSON.stringify(id));


  }



}

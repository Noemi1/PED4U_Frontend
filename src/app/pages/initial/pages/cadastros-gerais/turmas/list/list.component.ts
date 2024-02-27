import { Component } from '@angular/core';
import { TurmasService } from '../../../../../../services/turmas.service';
import { lastValueFrom, Subscription } from 'rxjs';
import { TurmasList } from '../../../../../../models/turma.model';
import { turmasColumns } from '../../../../../../models/turma.model';
import { Crypto } from '../../../../../../../utils/crypto';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Turmas } from '../../../../../../models/turma.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  columns = turmasColumns;
  title = 'Turmas'
  list: TurmasList[] = [];
  loading: boolean = true;
  subscription: Subscription[] = []
  objeto: Turmas = new Turmas;
  visible = true;

  constructor(
    private turmaService: TurmasService,
    private router: Router,
    private route: ActivatedRoute,
    private crypto: Crypto,
  ) {
    var list = this.turmaService.list.subscribe(res => {

      this.list = Object.assign([], res)
      this.formatarDia()
    });
    this.subscription.push(list);
    lastValueFrom(this.turmaService.getList(true));
  }


  formatarDia(){
    this.list.forEach(turma => {
      if(turma.diaSemana == 1){
        turma.diaSemana = 'Segunda-feira' as any

      }
      else if(turma.diaSemana == 2){
        turma.diaSemana = 'Terça-feira' as any

      }
      else if(turma.diaSemana == 3){
        turma.diaSemana = 'Quarta-feira' as any

      }
      else if(turma.diaSemana == 4){
        turma.diaSemana = 'Quinta-feira' as any

      }
      else if(turma.diaSemana == 5){
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

}

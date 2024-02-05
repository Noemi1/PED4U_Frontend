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
  subscription: Subscription []= []
  objeto:Turmas= new Turmas;
  visible = true;

  constructor(
    private turmaService: TurmasService,
    private router: Router,
    private route: ActivatedRoute,
    private crypto: Crypto,
  ) {
    var list = this.turmaService.list.subscribe(res => this.list = Object.assign([], res));
    this.subscription.push(list);
    lastValueFrom(this.turmaService.getList(true));
  }



}

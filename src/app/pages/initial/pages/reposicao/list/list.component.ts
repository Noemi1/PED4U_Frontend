import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Reposicao, ReposicaoList, reposicaoColumns } from '../../../../../models/reposicao.model';
import { ReposicaoService } from '../../../../../services/reposicao.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  columns = reposicaoColumns;
  title = 'Reposições'
  list: ReposicaoList []= [];
  loading: boolean = true;
  objeto: Reposicao = new Reposicao;
  visible = true;
  subscription: Subscription[] = [];

  constructor(private reposicaoService: ReposicaoService,
  ) {
    var list = this.reposicaoService.list.subscribe(res => this.list = Object.assign([], res));
    this.subscription.push(list);
    lastValueFrom(this.reposicaoService.getList(true));

    }




    get() {
      lastValueFrom(this.reposicaoService.getList(true));
    }

    update(): void {
      this.loading = true
      this.get
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }

  }





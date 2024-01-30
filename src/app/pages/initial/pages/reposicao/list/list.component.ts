import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { Reposicao, ReposicaoList, reposicaoColumns } from '../../../../../models/reposicao.model';
import { ReposicaoService } from '../../../../../services/reposicao.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  columns = reposicaoColumns;
  title = 'Reposições'
  list: ReposicaoList[] = [];
  loading: boolean = true;

  constructor(private reposicaoService: ReposicaoService) {
    this.reposicaoService.getList().subscribe(res => {
      this.list = Object.assign([], res);
      console.log(this.list)
    });
  }

  ngOnInit() {


  }


}

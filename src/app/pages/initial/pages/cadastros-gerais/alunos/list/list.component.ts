import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { AlunoService } from '../../../../../../services/aluno.service';
import { lastValueFrom } from 'rxjs';
import { alunoColumns } from '../../../../../../models/aluno.model';
import { AlunoList } from '../../../../../../models/aluno.model';

import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  columns = alunoColumns;
  title = 'Alunos'
  list: AlunoList[] = [];
  loading: boolean = true;


  constructor(
    private alunoService: AlunoService,
    private toastr: ToastrService
  ) {
    lastValueFrom(this.alunoService.getList())
    .then(res => {
        this.loading = false
    })
    .catch(res => {
        this.loading = false
    })
    var list = alunoService.list.subscribe(res => this.list = res)

  }

  ngOnInit() {
    this.alunoService.getList()
      .pipe(
        catchError(error => {
          this.toastr.error('Não foi possível carregar listagem de alunos.');
          this.loading = false;
          return of([]);  // Retorna um observable vazio para não interromper o fluxo
        })
      )
      .subscribe(list => {
        this.list = Object.assign([], list);
        this.loading = false;
      });
  }



}




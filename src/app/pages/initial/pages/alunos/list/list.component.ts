import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { AlunoService } from '../../../../../services/aluno.service';
import { lastValueFrom } from 'rxjs';
import { alunoColumns } from '../../../../../models/aluno.model';
import { AlunoList } from '../../../../../models/aluno.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  columns = alunoColumns;
  title = 'Alunos'
  list: AlunoList[] = [];



  constructor(
    private alunoService: AlunoService
  ) {
  }

  ngOnInit() {


  }


}

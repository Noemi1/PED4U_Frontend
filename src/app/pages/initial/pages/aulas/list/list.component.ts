import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { AlunoService } from '../../../../../services/aluno.service';
import { lastValueFrom } from 'rxjs';
import { AulaList } from '../../../../../models/aula.model';
import { aulaColumns } from '../../../../../models/aula.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  columns = aulaColumns;
  title = 'Alunos'
  list: AulaList[] = [];



  constructor(
    private alunoService: AlunoService
  ) {
  }

  ngOnInit() {


  }


}

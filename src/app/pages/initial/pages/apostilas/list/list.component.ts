import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { AlunoService } from '../../../../../services/aluno.service';
import { lastValueFrom } from 'rxjs';
import { apostilaColumns } from '../../../../../models/apostilas.model';
import { ApostilaList } from '../../../../../models/apostilas.model';
import { ApostilaService } from '../../../../../services/apostilas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  columns = apostilaColumns;
  title = 'Apostilas Ábaco'
  list: ApostilaList[] = [];



  constructor(
    private apostilaService: ApostilaService
  ) {
  }

  ngOnInit() {


  }


}

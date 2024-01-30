import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { AulaService } from '../../../../../services/aula.service';
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
  title = 'Aulas'
  list: AulaList[] = [];
  loading: boolean = true;



  constructor(private aulaService: AulaService) {
    this.aulaService.getList().subscribe(res => {
      this.list = Object.assign([], res);
      console.log('list', this.list)

    });
  }

  ngOnInit() {


  }


}

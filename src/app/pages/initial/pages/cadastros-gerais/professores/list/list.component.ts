import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { EducadoresList, educadorColumns } from '../../../../../../models/educadores.model';
import { EducadorService } from '../../../../../../services/educador.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  columns = educadorColumns;
  title = 'Educadores'
  list: EducadoresList[] = [];
  loading: boolean = true;


  constructor(
    private educadorService: EducadorService
  ) {
    this.educadorService.getList().subscribe(res => {
      this.list = Object.assign([], res);
  })
  }

  ngOnInit() {


  }


}

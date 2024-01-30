import { Component } from '@angular/core';
import { TurmasService } from '../../../../../../services/turmas.service';
import { lastValueFrom } from 'rxjs';
import { TurmasList } from '../../../../../../models/turma.model';
import { turmasColumns } from '../../../../../../models/turma.model';

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



  constructor(
    private turmaService: TurmasService
  ) {
    this.turmaService.getList().subscribe(res => {
      this.list = Object.assign([], res);
  })
  }

  ngOnInit() {


  }


}

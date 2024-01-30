import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { PerfilList, Perfil } from '../../../../../../models/perfil.model';
import { perfilColumns } from '../../../../../../models/perfil.model';
import { PerfilService } from '../../../../../../services/perfil.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  columns = perfilColumns;
  title = 'Perfil de Alunos'
  list: PerfilList[] = [];
  loading: boolean = true;


  constructor(
    private perfilService: PerfilService
  ) {

    lastValueFrom(this.perfilService.getList())
    .then(res => {
        this.loading = false
    })
    .catch(res => {
        this.loading = false
    })
    var list = perfilService.list.subscribe(res => this.list = res)
  }

  ngOnInit() {


  }


}

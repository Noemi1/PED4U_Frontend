import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { EducadoresList, educadorColumns } from '../../../../../../models/educadores.model';
import { EducadorService } from '../../../../../../services/educador.service';
import { Educadores } from '../../../../../../models/educadores.model';
import { Crypto } from '../../../../../../../utils/crypto';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../../../../../../services/usuario.service';
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
  subscription: Subscription []= []
  objeto:Educadores= new Educadores;
    visible = true;

  constructor(
    private usuarioService: UsuarioService,

  ) {

    var list = this.usuarioService.educadores.subscribe(res => this.list = Object.assign([], res));
    this.subscription.push(list);
    lastValueFrom(this.usuarioService.getEducador(true));
    console.log('list',list)
  }

  get() {
    lastValueFrom(this.usuarioService.getList(true));
  }

  update(): void {
    this.loading = true
    this.get
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }


}

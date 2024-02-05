import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { EducadoresList, educadorColumns } from '../../../../../../models/educadores.model';
import { EducadorService } from '../../../../../../services/educador.service';
import { Educadores } from '../../../../../../models/educadores.model';
import { Crypto } from '../../../../../../../utils/crypto';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
    private educadorService: EducadorService,

  ) {
    var list = this.educadorService.list.subscribe(res => this.list = Object.assign([], res));
    this.subscription.push(list);
    lastValueFrom(this.educadorService.getList(true));
  }



}

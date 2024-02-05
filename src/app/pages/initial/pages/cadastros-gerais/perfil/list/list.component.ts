import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { PerfilList, Perfil } from '../../../../../../models/perfil.model';
import { perfilColumns } from '../../../../../../models/perfil.model';
import { PerfilService } from '../../../../../../services/perfil.service';
import { Subscription } from 'rxjs';
import { Crypto } from '../../../../../../../utils/crypto';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
  objeto: Perfil = new Perfil;
  visible = true;
  subscription: Subscription []= []
  constructor(
    private perfilService: PerfilService,
    private router: Router,
    private route: ActivatedRoute,
    private crypto: Crypto,
  ) {

    var list = this.perfilService.list.subscribe(res => this.list = Object.assign([], res));
    this.subscription.push(list);
    lastValueFrom(this.perfilService.getList(true));
  }



}

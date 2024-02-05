import { Component } from '@angular/core';
import { usuarioColumns } from '../../../../../../models/usuarios.model';
import { UsuarioList } from '../../../../../../models/usuarios.model';
import { UsuarioService } from '../../../../../../services/usuario.service';
import { last, lastValueFrom } from 'rxjs';
import { Subscription } from 'rxjs';
import { Usuario } from '../../../../../../models/usuarios.model';
import { Crypto } from '../../../../../../../utils/crypto';
import { Apostila } from '../../../../../../models/apostilas.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  columns = usuarioColumns;
  title = 'Usuários'
  list:UsuarioList[] = [];
  loading: boolean = true;
  subscription: Subscription[] = [];
  objeto:Usuario= new Usuario;
  visible = true;

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private crypto: Crypto,) {
      var list = this.usuarioService.list.subscribe(res => this.list = Object.assign([], res));
    this.subscription.push(list);
    lastValueFrom(this.usuarioService.getList(true));
  }


}

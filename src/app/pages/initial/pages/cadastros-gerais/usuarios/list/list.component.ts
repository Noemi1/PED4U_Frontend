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
import { Table } from '../../../../../../utils/table';
import { MenuTableLink } from '../../../../../../helpers/menu-links.interface';
import { parse } from 'date-fns';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  columns = usuarioColumns;
  title = 'Usuários'
  list: UsuarioList[] = [];
  loading: boolean = true;
  subscription: Subscription[] = [];
  objeto: Usuario = new Usuario;
  visible = true;
  tableLinks: MenuTableLink[] = [];
  ativo: any
  id: any
  lista: any
  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private crypto: Crypto,
    private table: Table) {
    var list = this.usuarioService.list.subscribe(res => {
      this.list = Object.assign([], res)
      console.log('teste', this.list)
      this.lista = this.list
    }
    );
    this.subscription.push(list);
    lastValueFrom(this.usuarioService.getList(true));





    // var selected = this.table.selected.subscribe(res => {
    //   if (res) {
    //     this.tableLinks = [
    //       { label: 'Editar', routePath: ['editar'], paramsFieldName: ['id'] },
    //       { label: (res.ativo ? 'Desabilitar' : 'Habilitar'), routePath: [(res.ativo ? 'desabilitar' : 'habilitar')], paramsFieldName: ['id'] },
    //     ];
    //     this.tableLinks = this.table.encryptParams(this.tableLinks);
    //   }
    // });
    // this.subscription.push(selected);

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



  onIdClicadoChanged(id: number | undefined) {
    const user = this.list.find(user => user.id === id)

    this.ativo = user?.ativo;
    console.log(user)
    // Faça o que for necessário com o novo valor de idClicado
    console.log('Novo valor de idClicado:', id, user, this.ativo);

  }









}

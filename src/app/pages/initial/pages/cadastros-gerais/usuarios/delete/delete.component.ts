import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../../../../../services/usuario.service';
import { lastValueFrom } from 'rxjs';
import { getError } from '../../../../../../utils/error';
import { remove } from '../../../../../../helpers/service-list';
import { Crypto } from '../../../../../../../utils/crypto';
import { Usuario } from '../../../../../../models/usuarios.model';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  visible = true;
  loading = false;
  id: number = 0;
  erro: string = '';
  objeto: Usuario = new Usuario;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private crypto: Crypto,
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const idDecrypt = this.crypto.decrypt(id);
      console.log(idDecrypt)
      this.id = idDecrypt
    });

  }


  send(event: any) {
    this.loading = true;
    this.erro = '';
    console.log('id', this.id);
    lastValueFrom(this.usuarioService.delete(this.id))
      .then(res => {
        this.loading = false;
        if (res && (res.success != false || res.success === undefined)) {
          if (res.objeto) {
            remove(this.usuarioService, res.objeto, 'usuario');
            this.voltar();
          } else {
            console.log('oooi');
            lastValueFrom(this.usuarioService.getList());
            this.voltar();
          }
        } else {
          this.erro = res ? res.message : 'Erro desconhecido';
          console.log('Erro no sucesso:', this.erro);
          lastValueFrom(this.usuarioService.getList());
          this.voltar();
        }
      })
      .catch(res => {
        this.loading = false;
        this.voltar();
        this.erro = getError(res);
        lastValueFrom(this.usuarioService.getEducador());
        console.error('Erro no catch:', this.erro);
        console.error('Status HTTP:', res?.response?.status);
      });
  }


  voltar() {
    this.visible = false;
    this.router.navigate(['../..'], { relativeTo: this.route })

  }

}

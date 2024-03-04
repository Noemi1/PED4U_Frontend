import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';
import { UsuarioEditableAuth } from './usuario-editable.guard';
import { DeactivatedComponent } from './deactivated/deactivated.component';

const routes: Routes = [
  { path: '', component: ListComponent, children: [
      { path: 'cadastrar', component: FormComponent, title: 'Cadastrar apostila' },
      { path: 'editar/:id', component: FormComponent, title: 'Editar apostila' },
      { path: 'excluir/:id', component: DeleteComponent, title: 'Excluir apostila' },
      { path: 'habilitar/:id', component: DeactivatedComponent, data: { modalOrder: 1 }, title: 'Habilitar usuário', canActivate: [UsuarioEditableAuth] },
      { path: 'desabilitar/:id', component: DeactivatedComponent, data: { modalOrder: 1 }, title: 'Desabilitar usuário', canActivate: [UsuarioEditableAuth] },
  ] },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }

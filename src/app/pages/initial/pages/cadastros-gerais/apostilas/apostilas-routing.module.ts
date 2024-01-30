import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  { path: '', component: ListComponent, children: [
      { path: 'cadastrar', component: FormComponent, title: 'Cadastrar apostila' },
      { path: 'editar/:id', component: FormComponent, title: 'Editar apostila' },
      { path: 'excluir/:id', component: DeleteComponent, title: 'Excluir apostila' },
  ] },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApostilasRoutingModule { }

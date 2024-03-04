import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  { path: '', component: ListComponent, children: [
      { path: 'criar', component: FormComponent, title: 'Cadastrar aluno' },
      { path: 'editar/:id', component: FormComponent, title: 'Cadastrar aluno' },
      { path: 'excluir/:id', component: DeleteComponent, title: 'Excluir aluno' },

  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulasRoutingModule { }

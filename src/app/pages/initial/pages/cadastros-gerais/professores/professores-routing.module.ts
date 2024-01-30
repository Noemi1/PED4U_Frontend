import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
const routes: Routes = [
  { path: '', component: ListComponent, children: [
      { path: 'cadastrar', component: FormComponent, title: 'Cadastrar educador' },
      { path: 'editar/:id', component: FormComponent, title: 'Cadastrar educador' },
      { path: 'excluir/:id', component: DeleteComponent, title: 'Excluir educador' },
  ] },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresRoutingModule { }

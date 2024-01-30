import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
    { path: '', component: ListComponent, children: [
        { path: 'cadastrar', component: FormComponent, title: 'Cadastrar turma' },
        { path: 'editar/:id', component: FormComponent, title: 'Cadastrar turma' },
        { path: 'excluir/:id', component: DeleteComponent, title: 'Excluir turma' },
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmasRoutingModule { }

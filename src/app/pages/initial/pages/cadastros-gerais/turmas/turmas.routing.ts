import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';
import { AulasModule } from '../../aulas/aulas.module';
import { ListComponent as AulasComponent } from '../../aulas/list/list.component';

const aulas = () => import('../../aulas/aulas.module').then(res => res.AulasModule);
const routes: Routes = [
    { path: '', component: ListComponent, children: [
        { path: 'cadastrar', component: FormComponent, title: 'Cadastrar turma' },
        { path: 'editar/:id', component: FormComponent, title: 'Cadastrar turma' },
        { path: 'excluir/:id', component: DeleteComponent, title: 'Excluir turma' },
        // { path: 'lançar/:turma_id', component: AulasComponent, title: 'Turmas - Lançar aula' },
        { path: 'lançar/:turma_id', loadChildren: aulas },
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmasRoutingModule { }

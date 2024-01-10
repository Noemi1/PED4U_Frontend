import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './initial.component';

const alunos = () => import('./pages/alunos/alunos.module').then(res => res.AlunosModule);
const apostilas = () => import('./pages/apostilas/apostilas.module').then(res => res.ApostilasModule);
const perfil = () => import('./pages/perfil/perfil.module').then(res => res.PerfilModule);
const professores = () => import('./pages/professores/professores.module').then(res => res.ProfessoresModule);

const routes: Routes = [
    { path: '', component: InitialComponent, children: [
        { path: 'alunos', loadChildren: alunos },
        { path: 'apostilas', loadChildren: apostilas },
        { path: 'perfil', loadChildren: perfil },
        { path: 'professores', loadChildren: professores },
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InitialRoutingModule { }

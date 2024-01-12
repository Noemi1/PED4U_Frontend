import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './initial.component';

const alunos = () => import('./pages/alunos/alunos.module').then(res => res.AlunosModule);
const apostilas = () => import('./pages/apostilas/apostilas.module').then(res => res.ApostilasModule);
const perfil = () => import('./pages/perfil/perfil.module').then(res => res.PerfilModule);
const professores = () => import('./pages/professores/professores.module').then(res => res.ProfessoresModule);
const aulas = () => import('./pages/aulas/aulas.module').then(res => res.AulasModule);
const unidades = () => import('./pages/unidades/unidades.module').then(res => res.UnidadesModule);
const usuarios = () => import('./pages/usuarios/usuarios.module').then(res => res.UsuariosModule);

const routes: Routes = [
    { path: '', component: InitialComponent, children: [
        { path: 'alunos', loadChildren: alunos, title: 'Alunos' },
        { path: 'apostilas', loadChildren: apostilas, title: 'Apostilas' },
        { path: 'perfil', loadChildren: perfil, title: 'Perfil' },
        { path: 'professores', loadChildren: professores, title: 'Professores' },
        { path: 'aulas', loadChildren: aulas, title: 'Aulas' },
        { path: 'unidades', loadChildren: unidades, title: 'Unidades' },
        { path: 'usuarios', loadChildren: usuarios, title: 'Usuários' },
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InitialRoutingModule { }

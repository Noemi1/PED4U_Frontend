import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './initial.component';

const alunos = () => import('./pages/cadastros-gerais/alunos/alunos.module').then(res => res.AlunosModule);
const apostilas = () => import('./pages/cadastros-gerais/apostilas/apostilas.module').then(res => res.ApostilasModule);
const perfil = () => import('./pages/cadastros-gerais/perfil/perfil.module').then(res => res.PerfilModule);
const professores = () => import('./pages/cadastros-gerais/professores/professores.module').then(res => res.ProfessoresModule);
const aulas = () => import('./pages/aulas/aulas.module').then(res => res.AulasModule);
const unidades = () => import('./pages/unidades/unidades.module').then(res => res.UnidadesModule);
const usuarios = () => import('./pages/cadastros-gerais/usuarios/usuario.module').then(res => res.UsuarioModule);
const turmas = () => import('./pages/cadastros-gerais/turmas/turmas.module').then(res => res.TurmasModule);
const reposicoes = () => import('./pages/reposicao/reposicao.module').then(res => res.ReposicaoModule);


const routes: Routes = [
    { path: '', component: InitialComponent, children: [
        { path: 'alunos', loadChildren: alunos, title: 'Alunos' },
        { path: 'apostilas', loadChildren: apostilas, title: 'Apostilas' },
        { path: 'perfis', loadChildren: perfil, title: 'Perfil' },
        { path: 'professores', loadChildren: professores, title: 'Professores' },
        { path: 'aulas', loadChildren: aulas, title: 'Aulas' },
        { path: 'unidades', loadChildren: unidades, title: 'Unidades' },
        { path: 'usuarios', loadChildren: usuarios, title: 'Usuários' },
        { path: 'turmas', loadChildren: turmas, title: 'Turmas' },
        { path: 'reposicoes', loadChildren: reposicoes, title: 'Reposições' },
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InitialRoutingModule { }

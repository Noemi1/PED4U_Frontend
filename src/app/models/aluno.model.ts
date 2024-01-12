export class AlunoList {
    alunoId: number = 0;
    nome: string = '';
    celular: string = '';
    idade: number = 0;
    sexo: string = '';
    horarioTurma: string = '';
    diaTurma: number = 0;
    perfilAluno: string = '';
    dataVigencia: Date = new Date;
}

export class Aluno {
    id: number = 0;
    nome: string = '';
    dataNascimento: Date = new Date;
    data_Vigencia_Inicial: Date = new Date;
    data_Vigencia_Final: Date = new Date;
    celular: string = '';
    pessoa_Id: number = 0;
    turma_Id: number = 0;
    perfil_Id: number = 0;
    sexo_Id: number = 0;
}

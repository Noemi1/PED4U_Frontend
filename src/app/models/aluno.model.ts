import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";

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
    status:number = 0
}

export class Aluno {
    id: number = 0;
    nome: string = '';
    horarioTurma: string = '';
    dataNascimento: Date = new Date;
    data_Vigencia_Inicial: Date = new Date;
    data_Vigencia_Final: Date = new Date;
    celular: string = '';
    pessoa_Id: number = 0;
    turma_Id: number = 0;
    status_Id: number = 0;
    perfil_Id: number = 0;
    sexo_Id: number = 0;
}

export var alunoColumns: Column[] = [
  {
      field: 'id',
      header: 'Id',
      maskType: MaskType.undefined,
      filterType: FilterType.text,
      filterDisplay: FilterDisplay.menu,
      showAddButton: false,
      showMatchMode: false,
      showOperator: false,

  },
  {
      field: 'nome',
      header: ' Nome',
      maskType: MaskType.dateTime,
      filterType: FilterType.date,
      filterDisplay: FilterDisplay.menu,
      showAddButton: false,
      showMatchMode: true,
      showOperator: false,

  },
  {
    field: 'idade',
    header: 'Idade',
    maskType: MaskType.dateTime,
    filterType: FilterType.date,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,

},
{
  field: 'genero',
  header: 'Gênero',
  maskType: MaskType.dateTime,
  filterType: FilterType.date,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: true,
  showOperator: false,

},
{
  field: 'horarioTurma',
  header: 'Horário',
  maskType: MaskType.dateTime,
  filterType: FilterType.date,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: true,
  showOperator: false,

},
{
  field: 'diaSemana',
  header: 'Dia da Semana',
  maskType: MaskType.dateTime,
  filterType: FilterType.date,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: true,
  showOperator: false,

},
{
  field: 'perfil',
  header: 'Perfil',
  maskType: MaskType.dateTime,
  filterType: FilterType.date,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: true,
  showOperator: false,

},
{
  field: 'vigencia',
  header: 'Vigência',
  maskType: MaskType.dateTime,
  filterType: FilterType.date,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: true,
  showOperator: false,

},

];

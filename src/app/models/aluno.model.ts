import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";

export class AlunoList {
    alunoId: number = 0;
    turma_Id: number = 0;
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
    pessoa_Id: string = '';
    turma_Id: number = '' as unknown as number;
    perfil_Id: number = '' as unknown as number;
    data_Vigencia_Inicial: Date = new Date;
    data_Vigencia_Final: Date = new Date;
    nome: string = '';
    dataNascimento: Date = new Date;
    celular: string = '';
    sexo_Id:  number = '' as unknown as number;
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
      maskType: MaskType.undefined,
      filterType: FilterType.text,
      filterDisplay: FilterDisplay.menu,
      showAddButton: false,
      showMatchMode: true,
      showOperator: false,

  },
  {
    field: 'celular',
    header: ' Celular',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,

},
  {
    field: 'idade',
    header: 'Idade',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,

},
{
  field: 'genero',
  header: 'Gênero',
  maskType: MaskType.undefined,
  filterType: FilterType.text,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: true,
  showOperator: false,

},
{
  field: 'horarioTurma',
  header: 'Horário',
  maskType: MaskType.undefined,
  filterType: FilterType.text,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: true,
  showOperator: false,

},
{
  field: 'diaSemana',
  header: 'Dia da Semana',
  maskType: MaskType.undefined,
  filterType: FilterType.text,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: true,
  showOperator: false,

},
{
  field: 'perfil',
  header: 'Perfil',
  maskType: MaskType.undefined,
  filterType: FilterType.text,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: true,
  showOperator: false,

},
{
  field: 'vigencia',
  header: 'Vigência',
  maskType: MaskType.undefined,
  filterType: FilterType.text,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: true,
  showOperator: false,

},

];

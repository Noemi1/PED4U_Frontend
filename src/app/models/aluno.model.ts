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
    dataVigencia: string = '';

}

export class Aluno {
    id: number = 0;
    pessoa_Id: string = '';
    turma_Id: number = '' as unknown as number;
    perfil_Id: number = '' as unknown as number;
    data_Vigencia_Inicial:string = '';
    data_Vigencia_Final: string = '';
    nome: string = '';
    dataNascimento: string = '';
    celular: string = '';
    sexo_Id:  number = '' as unknown as number;
}

export var alunoColumns: Column[] = [

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
  field: 'sexo',
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
  field: 'diaTurma',
  header: 'Dia da Semana',
  maskType: MaskType.undefined,
  filterType: FilterType.text,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: true,
  showOperator: false,

},
{
  field: 'perfilAluno',
  header: 'Perfil',
  maskType: MaskType.undefined,
  filterType: FilterType.text,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: true,
  showOperator: false,

},
{
  field: 'dataVigencia',
  header: 'Vigência',
  maskType: MaskType.undefined,
  filterType: FilterType.text,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: true,
  showOperator: false,

},

];

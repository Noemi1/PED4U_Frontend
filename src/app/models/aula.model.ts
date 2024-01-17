import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";

export class AulaList {
    id: number = 0;
    nomeEducador: string = '';
    apostila: string = '';
    qtdPaginas: number = 0;
    falta: string = '';
    reposicao: string = '';

}

export class Aula {
    id: number = 0;
    nomeEducador: string = '';
    apostila: string = '';
    qtdPaginas: number = 0;
    falta: string = '';
    reposicao: string = '';

}

export var aulaColumns: Column[] = [
  {
      field: 'nomeEducador',
      header: 'Nome',
      maskType: MaskType.undefined,
      filterType: FilterType.text,
      filterDisplay: FilterDisplay.menu,
      showAddButton: false,
      showMatchMode: false,
      showOperator: false,

  },
  {
      field: 'apostila',
      header: 'Apostila',
      maskType: MaskType.dateTime,
      filterType: FilterType.date,
      filterDisplay: FilterDisplay.menu,
      showAddButton: false,
      showMatchMode: true,
      showOperator: false,

  },
  {
    field: 'qtdPaginas',
    header: 'Quantidade de Páginas',
    maskType: MaskType.dateTime,
    filterType: FilterType.date,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,

},
{
  field: 'falta',
  header: 'Falta',
  maskType: MaskType.dateTime,
  filterType: FilterType.date,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: true,
  showOperator: false,

},
{
  field: 'reposicao',
  header: 'Reposição',
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

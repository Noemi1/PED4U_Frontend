import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";

export class AulaList {
  id: number = 0;
  descricao: string = '';
  data: Date = new Date;
  realizada: boolean = false;
  educadorNome: string = '';
  horario: string = '';
  diaSemana: number = 0;
  turmaId: number = 0;

}

export class Aula {
  id: number = 0;
  descricao: string = '';
  turma_Id: number = '' as unknown as number;
  data: Date = new Date;
  realizada: boolean = false;
  educador_Id: number = '' as unknown as number

}

export var aulaColumns: Column[] = [
  {
    field: 'educadorNome',
    header: 'Nome',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: false,
    showOperator: false,

  },
  {
    field: 'descricao',
    header: 'Descrição',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: false,
    showOperator: false,

  },
  {
    field: 'data',
    header: 'Data',
    maskType: MaskType.dateTime,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: false,
    showOperator: false,

  },
  {
    field: 'realizada',
    header: 'Realizada',
    filterType: FilterType.text,
    maskType: MaskType.boolean,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: false,
    showOperator: false,


  },

  {
    field: 'turmaId',
    header: 'Turma',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: false,
    showOperator: false,

  }
];

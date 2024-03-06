import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";
export class TurmasList {
  id: number = 0;
  horario: string = '';
  diaSemana: number = 0;
  capacidadeAlunos: number = 0;
  vagasRestantes: number = 0;
  nomeEducador: string = '';
  perfis: [] = [];
}


export class Turmas {
  id: number = 0;
  horario: string = '';
  diaSemana:  number | null = null;
  qtdeMaxAlunos: number = '' as unknown as number;
  educador_Id: number = '' as unknown as number;
  unidade_Id: number = 0 as unknown as number;
  perfis: [] = [];
}

export var turmasColumns: Column[] = [
  {
    field: 'diaSemana',
    header: 'Dia da Semana',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: false,
    showOperator: false,

  },
  {
    field: 'horario',
    header: 'Horário',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,

  },
  {
    field: 'capacidadeAlunos',
    header: 'Capacidade de Alunos',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,

  },

  {
    field: 'nomeEducador',
    header: ' Educador',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,

  },
  {
    field: 'vagasRestantes',
    header: ' Vagas Restantes',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,

  },
  {
    field: 'perfis',
    header: 'Perfil',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,

  },
];

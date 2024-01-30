import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";
export class TurmasList {
    turmaId: number = 0;
    horario: string = '';
    diaSemana: number = 0;
    capacidadeAlunos: number = 0;
    vagasRestantes: number = 0;
    nomeEducador: string = '';
    perfil: string = '';
    }


    export class Turmas {
      id: number = 0;
      turmaId: number = '' as unknown as number;
      horario: string = '';
      diaSemana: number = '' as unknown as number;
      qtdMaxAlunos: number = '' as unknown as number;
      educador_Id: number = '' as unknown as number;
      unidade_Id: number = '' as unknown as number;
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
        field: 'perfil',
        header: 'Perfil',
        maskType: MaskType.undefined,
        filterType: FilterType.text,
        filterDisplay: FilterDisplay.menu,
        showAddButton: false,
        showMatchMode: true,
        showOperator: false,

      },
    ];

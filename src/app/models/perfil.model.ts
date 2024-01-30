import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";

export class PerfilList {
  id: number = 0;
  nome: string = '';

  perfil: string = '';
  nTurma: number = 0;


}

export class Perfil {
  id: number = 0;
  nome: string = '';

  perfil: string = '';
  nTurma: number = '' as unknown as number;

}

export var perfilColumns: Column[] = [
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
    field: 'nTurma',
    header: 'Nº de Turma',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,

  },


];

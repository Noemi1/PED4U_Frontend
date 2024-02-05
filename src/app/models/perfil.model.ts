import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";

export class PerfilList {
  id: number = 0;
  nome: string = '';


}

export class Perfil {
  id: number = 0;
  nome: string = '';

}

export var perfilColumns: Column[] = [
  {
    field: 'nome',
    header: 'Nome',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,

  },


];

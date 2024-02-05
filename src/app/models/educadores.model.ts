import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";

export class EducadoresList {
  id: number = 0;
  name: string = '';
  idade: number = 0;
  sexo_Id: string = '';
  dataNascimento: Date = new Date;
  horarioTurma: string = '';
  email: string = '';
  telefone: string = '';

}

export class Educadores {
  id: number = 0;
  nomeEducador: string = '';
  idade: number = '' as unknown as number;
  sexo_Id: string = '';
  dataNascimento: Date = new Date;
  horarioTurma: string = '';
  email: string = '';
  telefone: string = '';
}

export var educadorColumns: Column[] = [
  {
    field: 'name',
    header: ' Nome',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,

  },


  {
    field: 'email',
    header: 'E-mail',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,

  },



];

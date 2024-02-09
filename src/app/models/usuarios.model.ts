import { FilterMatchMode } from "primeng/api";
import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";

export class UsuarioList {
  id: number = 0;
  perfilAcesso_Id: number = 0;
  name: string = '';
  telefoneCelular: number = 0;
  email: string = '';

}

export class EducadorList {
  id: number = 0;
  perfilAcesso_Id: number = 0;
  name: string = '';
  telefoneCelular: number = 0;
  email: string = '';

}


export class Usuario {
  id: number = 0;
  perfilAcesso_Id: number = '' as unknown as number;
  name: string = '';
  telefoneCelular: number = '' as unknown as number;
  email: string = '';

}


export var usuarioColumns: Column[] = [
  {
    field: 'id',
    header: 'Id',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: false,
    showOperator: false,
    filterMatchMode: FilterMatchMode.EQUALS,
  },
  {
    field: 'name',
    header: ' nome',
    maskType: MaskType.dateTime,
    filterType: FilterType.date,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,
    filterMatchMode: FilterMatchMode.DATE_IS,
  },
  {
    field: 'email',
    header: 'E-mail',
    maskType: MaskType.dateTime,
    filterType: FilterType.date,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,
    filterMatchMode: FilterMatchMode.DATE_IS,
  },
];



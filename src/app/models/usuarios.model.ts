import { FilterMatchMode } from "primeng/api";
import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";

export class UsuarioList {
  id: number = 0;
  perfilAcesso_Id: number = 0;
  name: string = '';
  telefoneCelular: number = 0;
  email: string = '';
  ativo?: boolean;
  dataDesativado?: Date;

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
  dataDesativado?: Date;
  ativo?: boolean;

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
    header: ' Nome',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,
    filterMatchMode: FilterMatchMode.DATE_IS,
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
    filterMatchMode: FilterMatchMode.DATE_IS,
  },
  {
    field: 'ativo',
    header: 'Ativo',
    maskType: MaskType.options,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: false,
    showOperator: false,
    filterMatchMode: FilterMatchMode.EQUALS,
    values: [
        { value: true, output: 'Ativo', class: 'flag-green' },
        { value: false, output: 'Inativo', class: 'flag-danger' },
    ]
},
];



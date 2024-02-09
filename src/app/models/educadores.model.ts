import { FilterMatchMode } from "primeng/api";
import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";

export class EducadoresList {
  id: number = 0;
  perfilAcesso_Id: number = 0;
  name: string = '';
  telefoneCelular: number = 0;
  email: string = '';
  entidade: string ='educador'

}

export class Educadores {
  id: number = 0;
  perfilAcesso_Id: number = '' as unknown as number;
  name: string = '';
  telefoneCelular: number = '' as unknown as number;
  email: string = '';
  entidade: string ='educador'

}


export var educadorColumns: Column[] = [
  {
    field: 'name',
    header: 'Nome',
    maskType: MaskType.dateTime,
    filterType: FilterType.date,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,
    filterMatchMode: FilterMatchMode.DATE_IS,
  },
  // {
  //   field: 'telefoneCelular',
  //   header: 'Telefone/Celular',
  //   maskType: MaskType.undefined,
  //   filterType: FilterType.text,
  //   filterDisplay: FilterDisplay.menu,
  //   showAddButton: false,
  //   showMatchMode: true,
  //   showOperator: false,
  // },
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



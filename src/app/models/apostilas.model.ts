import { FilterMatchMode } from "primeng/api";
import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";
export class ApostilaList {
  id: number = 0;
  titulo: string = '';
  qtdePaginas: string = '';
  materialExtra: string = '';
}

export class Apostila {
  id: number = 0;
  titulo: string = '';
  qtdePaginas: string = '';
  materialExtra: string = '';
}


export var apostilaColumns: Column[] = [
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
      field: 'nome',
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
  field: 'qtdPaginas',
  header: 'Quantidade de Páginas',
  maskType: MaskType.dateTime,
  filterType: FilterType.date,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: true,
  showOperator: false,
  filterMatchMode: FilterMatchMode.DATE_IS,
},
  {
    field: 'materialExtra',
    header: 'Material Extra',
    maskType: MaskType.dateTime,
    filterType: FilterType.date,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: true,
    showOperator: false,
    filterMatchMode: FilterMatchMode.DATE_IS,
},
];



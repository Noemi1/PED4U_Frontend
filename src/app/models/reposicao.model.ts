import { FilterMatchMode } from "primeng/api";
import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";
export class ReposicaoList {
  id: number = 0;
  alta_Aula_Id: number = '' as unknown as number;
  reposicao_Aula_Id: number = '' as unknown as number;

}

export class Reposicao {
  id: number = 0;
  falta_Aula_Id: number = '' as unknown as number;
  reposicao_Aula_Id: number = '' as unknown as number;
}


export var reposicaoColumns: Column[] = [
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
      field: 'alta_Aula_Id',
      header: ' Aulta Faltada',
      maskType: MaskType.dateTime,
      filterType: FilterType.date,
      filterDisplay: FilterDisplay.menu,
      showAddButton: false,
      showMatchMode: true,
      showOperator: false,
      filterMatchMode: FilterMatchMode.DATE_IS,
  },
  {
  field: 'reposicao_Aula_Id',
  header: 'Aula Reposta',
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



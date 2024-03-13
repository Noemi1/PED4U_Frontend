import { AlunoAulaRel } from "./aluno.Aula.Rel.model";
import { ApostilaList } from "./apostilas.model";
import { Aula } from "./aula.model";
import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";
export class  LancarAula {
  aula: Aula = new Aula;
  rels: AlunoAulaRel[] = [];
  apostila_List: ApostilaList[] = []
  success: boolean = false;
}






export var RelsColumns: Column[] = [
  {
    field: 'id',
    header: 'Id',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: false,
    showOperator: false,
    // filterMatchMode: FilterMatchMode.EQUALS,
},
  {
      field: 'reposicao',
      header: 'Reposição',
      maskType: MaskType.undefined,
      filterType: FilterType.text,
      filterDisplay: FilterDisplay.menu,
      showAddButton: false,
      showMatchMode: false,
      showOperator: false,
      // filterMatchMode: FilterMatchMode.EQUALS,
  },
  {
    field: 'falta',
    header: 'Falta',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: false,
    showOperator: false,
    // filterMatchMode: FilterMatchMode.EQUALS,
},
{
  field: 'Apostila ábaco',
  header: 'apostilaAbaco_Id',
  maskType: MaskType.undefined,
  filterType: FilterType.text,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: false,
  showOperator: false,
  // filterMatchMode: FilterMatchMode.EQUALS,
},
{
  field: 'aula_Id',
  header: 'Aula',
  maskType: MaskType.undefined,
  filterType: FilterType.text,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: false,
  showOperator: false,
  // filterMatchMode: FilterMatchMode.EQUALS,
},
{
  field: 'aluna_Id',
  header: 'Aluno',
  maskType: MaskType.undefined,
  filterType: FilterType.text,
  filterDisplay: FilterDisplay.menu,
  showAddButton: false,
  showMatchMode: false,
  showOperator: false,
  // filterMatchMode: FilterMatchMode.EQUALS,
},

];

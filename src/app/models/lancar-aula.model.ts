import { AlunoAulaRel } from "./aluno.Aula.Rel.model";
import { ApostilaList } from "./apostilas.model";
import { Aula } from "./aula.model";
import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";
import { FilterMatchMode } from "primeng/api";
export class  LancarAula {
  aula: Aula = new Aula;
  rels: AlunoAulaRel[] = [];
  apostila_List: ApostilaList[] = []
  success: boolean = false;
}






export var RelsColumns: Column[] = [
  {
    field: 'aula_Id',
    header: 'Nome',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: false,
    showOperator: false,
    // filterMatchMode: FilterMatchMode.EQUALS,
  },
  {
    field: 'apostilaAbaco_Id',
    header: 'Apostila',
    maskType: MaskType.undefined,
    filterType: FilterType.text,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: false,
    showOperator: false,
    // filterMatchMode: FilterMatchMode.EQUALS,
  },
  {
    field: 'paginaAtual',
    header: 'Página',
    maskType: MaskType.undefined,
    filterType: FilterType.numeric,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: false,
    showOperator: false,
    // filterMatchMode: FilterMatchMode.EQUALS,
  },
  {
    field: 'falta',
    header: 'Falta',
    maskType: MaskType.options,
    filterType: FilterType.boolean,
    filterDisplay: FilterDisplay.menu,
    showAddButton: false,
    showMatchMode: false,
    showOperator: false,
    filterMatchMode: FilterMatchMode.EQUALS,
    values: [
        { value: true, output: 'Ativo' },
        { value: false, output: 'Inativo'},
    ]
  },
  {
      field: 'reposicao',
      header: 'Reposição',
      maskType: MaskType.undefined,
      filterType: FilterType.boolean,
      filterDisplay: FilterDisplay.menu,
      showAddButton: false,
      showMatchMode: false,
      showOperator: false,
      // filterMatchMode: FilterMatchMode.EQUALS,
  },





];

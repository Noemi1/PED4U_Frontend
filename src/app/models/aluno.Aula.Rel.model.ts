import { Column, FilterDisplay, FilterType, MaskType } from "../helpers/column.interface";

export class AlunoAulaRelList {
    id: number = 0;
    reposicao: boolean = false;
    falta:  boolean = false;
    paginaAtual: number = 0;
    apostilaNome: string = '';
    pessoaNome: string = '';

}

export class AlunoAulaRel {
  id: number = 0;
  reposicao: boolean = false;
  falta: boolean = false;
  paginaAtual: number = '' as unknown as number
  apostilaNome: string = '';
  pessoaNome: string = '';

}




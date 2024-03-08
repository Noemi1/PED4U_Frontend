import { AlunoAulaRel } from "./aluno.Aula.Rel.model";
import { ApostilaList } from "./apostilas.model";
import { Aula } from "./aula.model";

export class LancarAula {
  aula: Aula = new Aula;
  rels: AlunoAulaRel[] = [];
  apostila_List: ApostilaList[] = []
  success: boolean = false;
}

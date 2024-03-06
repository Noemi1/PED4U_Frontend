import { AlunoAulaRel } from "./aluno.Aula.Rel.model";
import { Aula } from "./aula.model";

export class LancarAula {
  aula: Aula = new Aula;
  rels: AlunoAulaRel[] = [];
}

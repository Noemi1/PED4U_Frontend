import { Component, OnChanges } from '@angular/core';
import { apostilaColumns } from '../../../../../../models/apostilas.model';
import { AlunoList, alunoColumns } from '../../../../../../models/aluno.model';
import { AlunoService } from '../../../../../../services/aluno.service';
import { last, lastValueFrom } from 'rxjs';
import { Subscription } from 'rxjs';
import { Crypto } from '../../../../../../../utils/crypto';
import { Aluno } from '../../../../../../models/aluno.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent  {
  columns = alunoColumns;
  title = 'Alunos'
  list: AlunoList[] = [];
  loading: boolean = true;
  subscription: Subscription[] = [];
  objeto: Aluno = new Aluno;
  visible = true;
  filters: string[] = [];
  //
  maskConfig: any= {
    mask: '(00) 00000-0000',
    lazy: false
  };
  constructor(private alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute,
    private crypto: Crypto,) {
      var list = this.alunoService.list.subscribe(res =>{

        this.list = Object.assign([], res)
        this.formatarCelularNaLista();
        this.formatarDataNaLista();
        this.formatarDia()

      }
      );

      this.subscription.push(list);
      lastValueFrom(this.alunoService.getList(true));

  }




  voltar() {
    this.visible = false;
    setTimeout(() => {
      this.router.navigate(['../'], { relativeTo: this.route })
    }, 300);
  }

  formatarDia(){
    this.list.forEach(aluno => {
      if(aluno.diaTurma == 1){
        aluno.diaTurma = 'Segunda-feira' as any

      }
      else if(aluno.diaTurma == 2){
        aluno.diaTurma = 'Terça-feira' as any

      }
      else if(aluno.diaTurma == 3){
        aluno.diaTurma = 'Quarta-feira' as any

      }
      else if(aluno.diaTurma == 4){
        aluno.diaTurma = 'Quinta-feira' as any

      }
      else if(aluno.diaTurma == 5){
        aluno.diaTurma = 'Sexta-feira' as any

      }

    });
  }

  get() {
    lastValueFrom(this.alunoService.getList(true));
  }

  update(): void {
    this.loading = true
    this.get
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
  formatarCelularNaLista() {
    this.list.forEach(aula => {
      aula.celular = this.aplicarMascaraCelular(aula.celular);
    });
  }

  aplicarMascaraCelular(valor: string): string {
    if (!valor) return '';

    if (valor.length === 13) {
      return valor.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
    } else if (valor.length === 12) {
      return valor.replace(/(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
    } else if (valor.length === 11) {
      return valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (valor.length === 10) {
      return valor.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else if (valor.length === 9 && (valor.startsWith('9') || valor.startsWith('8'))) {
      return valor.replace(/(\d{1,2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else if (valor.length === 9) {
      return valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (valor.length === 8) {
      return valor.replace(/(\d{4})(\d{4})/, '$1-$2');
    } else {
      return valor;
    }
  }


  formatarDataNaLista() {
    this.list.forEach(aluno => {
      aluno.dataVigencia = this.aplicarMascaraData(aluno.dataVigencia);
    });
  }
  aplicarMascaraData(valor: string): string {
    if (!valor) return '';

    // Remover parte do tempo (HH:MM:SS)
    const dataSemTempo = valor.split('T')[0];

    // Aplicar máscara se a data tiver o formato YYYY-MM-DD
    if (dataSemTempo.length === 10) {
      return dataSemTempo.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1');
    } else {
      return valor;
    }
  }


  }


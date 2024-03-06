import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { AulaService } from '../../../../../services/aula.service';
import { lastValueFrom } from 'rxjs';
import { AulaList } from '../../../../../models/aula.model';
import { aulaColumns } from '../../../../../models/aula.model';
import { Subscription } from 'rxjs';
import { Crypto } from '../../../../../../utils/crypto';
import { Aula } from '../../../../../models/aula.model';
import { of } from 'rxjs';
import { EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  columns = aulaColumns;
  title = 'Lançar aulas'
  list: AulaList[] = [];
  PerfilTurmas = true
  loading: boolean = true;
  subscription: Subscription[] = []
  objeto: AulaList = new AulaList;
  teste: Aula[] = [];
  visible = true;
  idClicado: number | undefined;
  datasFormatadas: string[] = [];
  aaulaService: AulaService[] = [];
  idTurma: number = 0
  @Output() idClicadoChanged: EventEmitter<number | undefined> = new EventEmitter<number | undefined>();
  constructor(private aulaService: AulaService,

    private router: Router,
    private route: ActivatedRoute) {
    console.log('o1111i', this.idTurma)
    this.route.params.subscribe(params => {

      const id = parseInt(params['turma_id'], 10);
      lastValueFrom(this.aulaService.getList(true, id))
        .then(res => {

          console.log('turma_id', this.objeto)
        })
        .catch(res => {
          this.voltar();
        })
    });
    var list = this.aulaService.list.subscribe(res => {
      this.list = Object.assign([], res)
      if (this.list && this.list.length > 0) {
        this.formatarDataNaLista()
        this.formatarBoleano()
      }
    });

    this.subscription.push(list);

    lastValueFrom(this.aulaService.getList(true, this.idTurma));
    console.log('id', this.idTurma)

  }

  get() {
    lastValueFrom(this.aulaService.getList(true, this.idTurma));
  }

  voltar() {
    this.router.navigate(['../..'], { relativeTo: this.route })
  }



  formatarBoleano() {
    this.list.forEach(aula => {
      if (aula.realizada == true) {
        aula.realizada = 'Sim' as any

      }
      else {
        aula.realizada = 'Não' as any

      }
    });
  }
  update(): void {
    this.loading = true
    this.get
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
  getServiceObservable(): Observable<AulaService | null> {
    return this.aaulaService.length > 0 ? of(this.aaulaService[0]) : of(null);

  }

  formatarDataNaLista() {
    this.list.forEach(aula => {
      aula.data = this.aplicarMascara(aula.data);
    });
  }
  aplicarMascara(valor: string): string {
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

  formatarDatas() {
    this.list.forEach(aula => {
      const dataFormatada = this.formatarData(aula.data);
      this.datasFormatadas.push(dataFormatada);
      aula.data = dataFormatada;
    });
  }

  formatarData(dataString: string): string {
    const data = new Date(dataString);
    const dia = ('0' + data.getDate()).slice(-2);
    const mes = ('0' + (data.getMonth() + 1)).slice(-2);
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  ngOnChange(){
    this.idClicadoChanged.emit(this.idClicado);
  }




}

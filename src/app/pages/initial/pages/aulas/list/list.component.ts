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

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  columns = aulaColumns;
  title = 'Aulas'
  list: AulaList[] = [];

  loading: boolean = true;
  subscription: Subscription[] = []
  objeto: Aula = new Aula;
  teste: Aula[] = [];
  visible = true;
  datasFormatadas: string[] = [];

  constructor(private aulaService: AulaService) {
    var list = this.aulaService.list.subscribe(res => {
      this.list = Object.assign([], res)
      console.log('list', this.list)
      if (this.list  && this.list.length > 0) {
        this. formatarDataNaLista()
      }
    });

    this.subscription.push(list);

    lastValueFrom(this.aulaService.getList(true));

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
}

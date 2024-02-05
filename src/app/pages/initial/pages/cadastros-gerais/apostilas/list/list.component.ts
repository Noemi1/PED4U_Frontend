import { Component } from '@angular/core';
import { apostilaColumns } from '../../../../../../models/apostilas.model';
import { ApostilaList } from '../../../../../../models/apostilas.model';
import { ApostilaService } from '../../../../../../services/apostilas.service';
import { last, lastValueFrom } from 'rxjs';
import { Subscription } from 'rxjs';



import { Crypto } from '../../../../../../../utils/crypto';
import { Apostila } from '../../../../../../models/apostilas.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  columns = apostilaColumns;
  title = 'Apostilas Ábaco'
  list: ApostilaList[] = [];
  loading: boolean = true;
  subscription: Subscription[] = [];


  objeto:Apostila= new Apostila;
    visible = true;

  constructor(private apostilaService: ApostilaService,
    private router: Router,
    private route: ActivatedRoute,
    private crypto: Crypto,) {
      var list = this.apostilaService.list.subscribe(res => this.list = Object.assign([], res));
    this.subscription.push(list);
    lastValueFrom(this.apostilaService.getList(true));
  }


}

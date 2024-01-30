import { Component } from '@angular/core';
import { apostilaColumns } from '../../../../../../models/apostilas.model';
import { ApostilaList } from '../../../../../../models/apostilas.model';
import { ApostilaService } from '../../../../../../services/apostilas.service';
import { last, lastValueFrom } from 'rxjs';
import { Subscription } from 'rxjs';
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

  constructor(private apostilaService: ApostilaService) {
    this.apostilaService.getList().subscribe(res => {
      this.list = Object.assign([], res);

    });
  }
  ngOnInit() {


  }



}

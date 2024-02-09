
import { Crypto } from './../../../utils/crypto';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Column } from '../../helpers/column.interface';
import { TurmasService } from '../../services/turmas.service';
import { ContextMenu } from 'primeng/contextmenu';
import {  ViewChild } from '@angular/core';
import {  QueryList, ViewChildren } from '@angular/core';
import { ColumnFilter } from 'primeng/table';
import { SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-list-shared',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListSharedComponent {

  idClicado: number | undefined;

  @ViewChildren('menuItem') contextMenus!: QueryList<ContextMenu>;

  openContextMenu(event: Event, menu: ContextMenu, item: any) {
    event.preventDefault();
    if (item.id){
      this.idClicado = item.id;
    }
    else if (item.alunoId){
      this.idClicado = item.alunoId;
    }
    console.log(this.idClicado)
    // Fecha todos os menus antes de abrir o menu associado ao item clicado
    this.closeAllContextMenus();

    menu.toggle(event);

  }


  closeAllContextMenus() {
    // Fecha todos os menus
    if (this.contextMenus) {
      this.contextMenus.forEach(menu => menu.hide());
    }
  }




  @Input() columns: Column[] = [];
  @Input() list: any[] = [];
  @Input() title: string = '';

  public selectedItem: any;
  public conteudo = {}

  menu: MenuItem[] = [
    { label: 'Editar', icon: 'pi pi-fw pi-pencil', command: () => this.navigateToEditar()  },
    { label: 'Excluir', icon: 'pi pi-fw pi-trash', command: () => this.navigateToExcluir()  }
  ];
  menuGlobal: MenuItem[] = [
    { label: 'Atualizar lista', icon: 'pi  pi-spinner' },
    { label: 'Cadastrar' + this.title, icon: 'pi pi-plus' }
  ];


  representatives!: any[];
  statuses!: any[];
  loading: boolean = true;
  activityValues: number[] = [0, 100];
  filters: string[] = [];
  itemMenuAtivo: number | null = null;
  // @Input() filterTable = true;

  @Input() filterTable: boolean = false;
  filterValue: string = ''; // Valor do filtro

  formatedList: any = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private crypto: Crypto,

  ) {
console.log('oi')

  }




  navigateToEditar() {
    if (this.idClicado !== undefined) {
      const Encrypt = this.crypto.encrypt(this.idClicado);
      this.router.navigate(['editar', Encrypt], { relativeTo: this.activatedRoute });
    }
  }

  navigateToExcluir() {
    if (this.idClicado !== undefined) {
      const Encrypt = this.crypto.encrypt(this.idClicado);
      this.router.navigate(['excluir', Encrypt], { relativeTo: this.activatedRoute });
    }
  }

  public editarItem(item: any): void {

    console.log(item.id)
    this.router.navigate(['apostilas' ,'editar', item.id]);

    this.router.navigate([ 'editar', item.id] , {relativeTo:this.activatedRoute});

  }



  ngOnInit() {

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ];
  }

  clear(table: Table) {
    table.clear();
  }

  getSeverity(status: string): "success" | "info" | "warning" | "danger" | undefined {
    switch (status.toLowerCase()) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return undefined;

      default:
        return undefined;
    }
  }


}

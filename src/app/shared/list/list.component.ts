
import { Crypto } from './../../../utils/crypto';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Column } from '../../helpers/column.interface';
import { ContextMenu } from 'primeng/contextmenu';
import { QueryList, ViewChildren } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { ColumnFilter } from 'primeng/table';
import { SelectItem } from 'primeng/api';
@Component({
  selector: 'app-list-shared',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListSharedComponent {
  idClicado: number | undefined;
  @Input() paginator: boolean = true;
  @ViewChildren('menuItem') contextMenus!: QueryList<ContextMenu>;
  @Input() columns: Column[] = [];
  @Input() list: any[] = [];
  @Input() title: string = '';
  @ViewChild('dt1') dt1!: Table;
  @Input() sortTable = true;
  @Input() teste1: any;
  @Input() icone: string = '';
  public selectedItem: any;
  public conteudo = {}
  @Input() PerfilAulas: boolean = false;
  @Input() PerfilTurmas: boolean = false;

  @Input() menu: MenuItem[] = [

    { label: 'Editar', icon: 'pi pi-fw pi-pencil', command: () => this.navigateToEditar() },
    { label: 'Excluir', icon: 'pi pi-fw pi-trash', command: () => this.navigateToExcluir() },
    { label: 'Lançar', icon: 'pi pi-fw pi-trash', command: () => this.navigateToAulas(), visible: this.PerfilAulas == true },
  ];


  menuGlobal: MenuItem[] = [
    { label: 'Atualizar lista', icon: 'pi  pi-spinner' },
    { label: 'Cadastrar' + this.title, icon: 'pi pi-plus' }
  ];
  representatives!: any[];
  statuses!: any[];
  loading: boolean = false;
  activityValues: number[] = [0, 100];
  filters: string[] = [];
  itemMenuAtivo: number | null = null;
  @Input() filterTable: boolean = false;
  filterValue: string = '';
  formatedList: any = [];
  @Input() service: any
  cleaned: boolean = false;
  matchModeOptions: SelectItem<any>[] = [
    { label: 'Começa com', value: 'startsWith' },
    { label: 'Contém', value: 'contains' },
    { label: 'Igual a', value: 'equals' },
    { label: 'Diferente de', value: 'notEquals' },
    { label: 'Termina com', value: 'endsWith' },
    { label: 'Dentro de', value: 'in' },
    { label: 'Menor que', value: 'lt' },
    { label: 'Menor ou igual a', value: 'lte' },
    { label: 'Maior que', value: 'gt' },
    { label: 'Maior ou igual a', value: 'gte' },
    { label: 'É', value: 'is' },
    { label: 'Não é', value: 'isNot' },
    { label: 'Antes', value: 'before' },
    { label: 'Depois', value: 'after' }
  ];


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private crypto: Crypto,

  ) {
    console.log('oi', this.title, this.list)
    this.filters = this.columns.map(x => x.field)
    console.log(this.filters)


  }



  ngOnChanges(changes: SimpleChanges): void {
    if (changes['list']) {
      this.list = changes['list'].currentValue;

    }
    if (changes['columns']) {
      this.columns = changes['columns'].currentValue;
      this.filters = this.columns.map(x => x.field)
    }
    this.menu = [

      { label: 'Editar', icon: 'pi pi-fw pi-pencil', command: () => this.navigateToEditar(), visible: this.PerfilAulas != true },
      { label: 'Excluir', icon: 'pi pi-fw pi-trash', command: () => this.navigateToExcluir(), visible: this.PerfilAulas != true },
      { label: 'Lançar', icon: 'pi pi-fw pi-pencil', command: () => this.navigateToAulas(), visible: this.PerfilAulas == true },
    ];





    if (changes['loading']) this.loading = changes['loading'].currentValue;
  }
  openContextMenu(event: Event, menu: ContextMenu, item: any) {
    event.preventDefault();

    if (item.id) {
      this.idClicado = item.id;
    }
    else if (item.alunoId) {
      this.idClicado = item.alunoId;
    }
    console.log(this.idClicado)
    this.closeAllContextMenus();
    menu.toggle(event);

  }


  closeAllContextMenus() {
    if (this.contextMenus) {
      this.contextMenus.forEach(menu => menu.hide());
    }
  }


  checkContextMenu(event: MouseEvent, menu: ContextMenu, item: any) {
    event.preventDefault();
    this.openContextMenu(event, menu, item)

  }


  onClick(): void {
    if (typeof this.service === 'function') {
      this.service();
    }
  }

  navigateToAulas() {
    if (this.idClicado !== undefined) {
      console.log('oi', this.idClicado)
      this.router.navigate(['lançar', this.idClicado], { relativeTo: this.activatedRoute });
    }

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
    this.router.navigate(['apostilas', 'editar', item.id]);

    this.router.navigate(['editar', item.id], { relativeTo: this.activatedRoute });

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

  clear(table: Table): void {
    table.clear();
    console.log(this.cleaned)
    this.cleaned = true
    console.log(table, this.cleaned)

  }


  onInputChange(event: any) {
    console.log('Valor do input mudou:', event.target.value);
    this.cleaned = false
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

  filterColOption(value: any, filter: any) {
    value = value != undefined && value != null ? value.value : undefined;
    filter(value);
  }

  filterCol(value: any, filterCallback: any, filterEl: ColumnFilter) {
    filterCallback(value);
    $(filterEl.el.nativeElement).find('.p-column-filter-menu-button').trigger('click');
    setTimeout(() => {
      $(filterEl.el.nativeElement).find('.p-column-filter-menu-button').trigger('click');
    }, 50);

  }


  filterDate(value: any, filterCallback: any, filterEl: ColumnFilter) {
    if (value)
      filterCallback(value);
    else
      filterEl.clearFilter();
  }

  filterNumeric(event: any, filterCallback: any, filterEl: ColumnFilter) {
    var value = event.target.value.replaceAll('.', '')
    value = parseFloat(value.replaceAll(',', '.'))
    if (value)
      filterCallback(value);
    else
      filterEl.clearFilter();
  }
}

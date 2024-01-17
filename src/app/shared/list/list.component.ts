import { Component , Input} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { AlunoService } from '../../services/aluno.service';
import { lastValueFrom } from 'rxjs';
import { AlunoList } from '../../models/aluno.model';
import { Column } from '../../helpers/column.interface';

@Component({
    selector: 'app-list-shared',
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListSharedComponent {
  @Input() columns: Column[] = [];
  @Input() list: any[] = [];
  @Input() title: string='';
    menu: MenuItem[] = [
        { label: 'View', icon: 'pi pi-fw pi-search' },
        { label: 'Delete', icon: 'pi pi-fw pi-trash' }
    ];
    menuGlobal: MenuItem[] = [
        { label: 'Atualizar lista', icon: 'pi  pi-spinner' },
        { label: 'Cadastrar wwwww' + this.title, icon: 'pi pi-plus', routerLink: 'cadastrar' }
    ];
    representatives!: any[];
    statuses!: any[];
    loading: boolean = true;
    activityValues: number[] = [0, 100];


    constructor(
        private alunoService: AlunoService
    ) {

        lastValueFrom(this.alunoService.getList())
        .then(res => {
            this.loading = false
        })
        .catch(res => {
            this.loading = false
        })
        var list = alunoService.list.subscribe(res => this.list = res)


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

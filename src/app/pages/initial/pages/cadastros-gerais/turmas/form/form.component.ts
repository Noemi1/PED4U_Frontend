import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Turmas } from '../../../../../../models/turma.model';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss'
})
export class FormComponent {
    visible = true;
    loading = false;
    objeto: Turmas = new Turmas;
    dataVigencia: [Date, Date] = [new Date(2023, 1, 2), new Date(2023, 28, 2)];
    diaList = [
        { id: 1, nome: 'Segunda-Feira' },
        { id: 2, nome: 'Terça-Feira' },
        { id: 3, nome: 'Quarta-Feira' },
        { id: 4, nome: 'Quinta-Feira' },
        { id: 5, nome: 'Sexta-Feira' },
    ]
    perfiList = [
        { id: 1, nome: 'Perfil 1' },
        { id: 2, nome: 'Perfil 2' },
        { id: 3, nome: 'Perfil 3' },
    ];
    educadorList = [
        { id: 1, nome: 'Educador 1' },
        { id: 2, nome: 'Educador 2' },
        { id: 3, nome: 'Educador 3' },
    ];

    turmaList = [
      { id: 1, nome: 'Turma 1' },
      { id: 2, nome: 'Turma 2' },
      { id: 3, nome: 'Turma 3' },
  ];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) {

    }

    voltar() {
        this.visible = false;
        console.log(this.objeto)
        setTimeout(() => {
            this.router.navigate(['..'], { relativeTo: this.route })
        }, 300);
    }
    change(e: any) {
        console.log(e)
        console.log(this.dataVigencia)
        console.log(this.objeto)

    }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../../../../../../models/aluno.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AlunoService } from '../../../../../../services/aluno.service';
import { lastValueFrom } from 'rxjs';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss'
})
export class FormComponent {
    visible = true;
    loading = false;
    objeto: Aluno = new Aluno;
    erro: string = '';
    dataVigencia: [Date, Date] = [new Date(2023, 1, 2), new Date(2023, 28, 2)];
    sexoList = [
        { id: 1, nome: 'Feminino' },
        { id: 2, nome: 'Masculino' },
        { id: 3, nome: 'Outro' },
    ]
    perfiList = [
        { id: 1, nome: 'Perfil 1' },
        { id: 2, nome: 'Perfil 2' },
        { id: 3, nome: 'Perfil 3' },
    ];
    turmaList = [
        { id: 1, nome: 'Turma 1' },
        { id: 2, nome: 'Turma 2' },
        { id: 3, nome: 'Turma 3' },
    ];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private alunoService: AlunoService
    ) {

    }

    voltar() {
        this.visible = false;
        setTimeout(() => {
            this.router.navigate(['..'], { relativeTo: this.route })
        }, 300);
    }
    change(e: any) {
        console.log(e)
        console.log(this.dataVigencia)
        this.objeto.data_Vigencia_Inicial = this.dataVigencia[0];
        this.objeto.data_Vigencia_Final = this.dataVigencia[1];
        console.log(this.objeto)

    }

    send(form: NgForm) {
      if (form.invalid) {
          this.toastr.error('Campos inválidos');
          this.erro = 'Campos inválidos';
          return;
      }
      this.erro = '';
      this.loading = true;


      return lastValueFrom(this.alunoService.post(this.objeto))
          .then(res => {
              if (res.sucesso != false) {
                  if (res.objeto) {

                  } else {
                      lastValueFrom(this.alunoService.getList());
                  }
                  this.voltar();
              } else {
                  this.erro = res.mensagem;
              }
              this.loading = false;
          })
          .catch(res => {
              console.error(res)
              this.loading = false;

          })

  }

}

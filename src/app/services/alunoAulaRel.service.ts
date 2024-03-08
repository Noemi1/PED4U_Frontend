import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { AlunoAulaRel, AlunoAulaRelList } from '../models/aluno.Aula.Rel.model';
import { Response } from '../helpers/request-response.interface';
import { LancarAula } from '../models/lancar-aula.model';
@Injectable({
    providedIn: 'root'
})
export class AlunoAulaRelService {
    url = environment.url;
    list = new BehaviorSubject<AlunoAulaRelList[]>([]);
    loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    get token(){
      return localStorage.getItem('teste')
    }
    constructor(
        private http: HttpClient,
        private toastr: ToastrService,
    ) { }

    getList( loading: boolean = false) {
      this.loading.next(loading);
       return this.http.get<AlunoAulaRelList[]>(`${this.url}/Aluno_Aula_Rel/Reposicao-List`)
           .pipe(tap({
               next: list => {
                   this.loading.next(false);
                   this.list.next(Object.assign([], list));
                   return of(list);
               },
               error: res => this.toastr.error('Não foi possível carregar listagem de alunos relacionados.')
           }));
   }

    get(id: number) {
        return this.http.get<AlunoAulaRel>(`${this.url}/Aluno_Aula_Rel/Presenca-by-AulaId/${id}`, { headers: new HttpHeaders({ 'loading': 'true' }) })
        .pipe(tap({
            error: res => this.toastr.error('Não foi possível carregar alunos relacionados.')
        }));
    }

   post(request: LancarAula) {
        return this.http.post<Response>(`${this.url}/Aula`, request);
    }

    edit(request: AlunoAulaRel) {
        return this.http.put(`${this.url}/Aluno_Aula_Rel`, request);
    }

    delete(id: number) {
        return this.http.delete<Response>(`${this.url}/Aluno_Aula_Rel/${id}`);
    }



}


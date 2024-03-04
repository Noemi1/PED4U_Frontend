import { AlunoList } from './../models/aluno.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of, tap } from 'rxjs';
import { Response } from '../helpers/request-response.interface';
import { environment } from '../../environments/environment.prod';

import { Aluno, AlunoRequest } from './../models/aluno.model';

@Injectable({
    providedIn: 'root'
})
export class AlunoService {
    url = environment.url;
    list = new BehaviorSubject<AlunoList[]>([]);
    loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private toastr: ToastrService,
    ) { }

    getList(/* empresaId?: number, */ loading: boolean = false) {
      this.loading.next(loading);

       // empresaId = empresaId ?? this.empresaService.empresaSelected.value.id ?? '' as unknown as number ;
       return this.http.get<AlunoList[]>(`${this.url}/Aluno` )
           .pipe(tap({
               next: list => {
                   this.loading.next(false);
                   this.list.next(Object.assign([], list));
                   console.log('listt', list)
                   return of(list);
               },
               error: res => this.toastr.error('Não foi possível carregar listagem de Alunos.')

           }));
   }

    get(id: number) {
        return this.http.get<AlunoRequest>(`${this.url}/Aluno/${id}`, { headers: new HttpHeaders({ 'loading': 'true' }) })
        .pipe(tap({
            error: res => this.toastr.error('Não foi possível carregar Alunos.')
        }));
    }

    post(request: AlunoRequest) {
        return this.http.post<Response>(`${this.url}/Aluno`, request);
    }

    edit(request: AlunoRequest) {
        return this.http.put(`${this.url}/Aluno`, request);
    }

    delete(id: number) {
        return this.http.delete<Response>(`${this.url}/Aluno/${id}`);
    }

}


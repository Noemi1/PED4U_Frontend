import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of, tap } from 'rxjs';
import { Aluno, AlunoList } from '../models/aluno.model';
import { Response } from '../helpers/request-response.interface';
import { environment } from '../../environments/environment';
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

    getList(loading: boolean = false) {
        return this.http.get<AlunoList[]>(`${this.url}/Aluno`)
            .pipe(tap({
                next: list => {
                    this.list.next(Object.assign([], list));
                    return of(list);
                },
                error: res => this.toastr.error('Não foi possível carregar listagem de alunos.')

            }));
    }

    get(id: number) {
        return this.http.get<Aluno>(`${this.url}/Aluno/${id}`, { headers: new HttpHeaders({ 'loading': 'true' }) })
        .pipe(tap({
            error: res => this.toastr.error('Não foi possível carregar aluno.')
        }));
    }

    post(request: Aluno) {
        return this.http.post<Response>(`${this.url}/Aluno`, request);
    }

    edit(request: Aluno) {
        return this.http.put(`${this.url}/Aluno`, request);
    }

    delete(id: number) {
        return this.http.delete(`${this.url}/Aluno/${id}`);
    }

}


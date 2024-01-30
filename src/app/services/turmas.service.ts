import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of, tap } from 'rxjs';
import { Turmas, TurmasList } from '../models/turma.model';
import { environment } from '../../environments/environment.prod';
import { Response } from '../helpers/request-response.interface';

@Injectable({
    providedIn: 'root'
})
export class TurmasService {
    url = environment.url;
    list = new BehaviorSubject<TurmasList[]>([]);
    loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private toastr: ToastrService,
    ) { }

    getList(loading: boolean = false) {
        return this.http.get<TurmasList[]>(`${this.url}/Turma`)
            .pipe(tap({
                next: list => {
                    this.list.next(Object.assign([], list));
                    return of(list);
                },
                error: res => this.toastr.error('Não foi possível carregar listagem de Turmas.')

            }));
    }

    get(id: number) {
        return this.http.get<Turmas>(`${this.url}/Turma/${id}`, { headers: new HttpHeaders({ 'loading': 'true' }) })
        .pipe(tap({
            error: res => this.toastr.error('Não foi possível carregar Turmas.')
        }));
    }

    post(request: Turmas) {
      return this.http.post<Response>(`${this.url}/Turma`, request);
  }

    edit(request: Turmas) {
        return this.http.put(`${this.url}/Turma`, request);
    }

    delete(id: number) {
        return this.http.delete(`${this.url}/Turma/${id}`);
    }

}


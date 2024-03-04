import { PerfilList } from '../models/perfil.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of, tap } from 'rxjs';
import { Perfil } from '../models/perfil.model';
import { Response } from '../helpers/request-response.interface';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PerfilService {
    url = environment.url;
    list = new BehaviorSubject<PerfilList[]>([]);
    loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private toastr: ToastrService,
    ) { }

    getList(loading: boolean = false) {
        return this.http.get<PerfilList[]>(`${this.url}/Turma_Perfil`)
            .pipe(tap({
                next: list => {
                    this.list.next(Object.assign([], list));
                    return of(list);
                },
                error: res => this.toastr.error('Não foi possível carregar listagem de perfis.')

            }));
    }

    get(id: number) {
        return this.http.get<Perfil>(`${this.url}/Turma_Perfil/${id}`, { headers: new HttpHeaders({ 'loading': 'true' }) })
        .pipe(tap({
            error: res => this.toastr.error('Não foi possível carregar perfis.')
        }));
    }

    post(request: Perfil) {
        return this.http.post<Response>(`${this.url}/Turma_Perfil`, request);
    }

    edit(request: Perfil) {
        return this.http.put(`${this.url}/Turma_Perfil`, request);
    }

    delete(id: number) {
        return this.http.delete<Response>(`${this.url}/Turma_Perfil/${id}`);
    }

}


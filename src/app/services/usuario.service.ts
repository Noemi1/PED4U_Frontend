import { Usuario, UsuarioList } from './../models/usuarios.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of, tap } from 'rxjs';
import { Response } from '../helpers/request-response.interface';
import { environment } from '../../environments/environment.prod';



@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    url = environment.url;
    list = new BehaviorSubject<UsuarioList[]>([]);
    loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private toastr: ToastrService,
    ) { }

    getList( loading: boolean = false) {
      this.loading.next(loading);


       return this.http.get<UsuarioList[]>(`${this.url}/Usuario` )
           .pipe(tap({
               next: list => {
                   this.loading.next(false);
                   this.list.next(Object.assign([], list));
                   return of(list);
               },
               error: res => this.toastr.error('Não foi possível carregar listagem de usuários.')

           }));
   }

    get(id: number) {
        return this.http.get<Usuario>(`${this.url}/Usuario/${id}`, { headers: new HttpHeaders({ 'loading': 'true' }) })
        .pipe(tap({
            error: res => this.toastr.error('Não foi possível carregar usuários.')
        }));
    }

    post(request: Usuario) {
        return this.http.post<Response>(`${this.url}/Usuario`, request);
    }

    edit(request: Usuario) {
        return this.http.put(`${this.url}/Usuario`, request);
    }

    delete(id: number) {
        return this.http.delete<Response>(`${this.url}/Usuario/${id}`);
    }

}


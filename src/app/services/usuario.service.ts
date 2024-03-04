import { Usuario, UsuarioList } from './../models/usuarios.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of, tap } from 'rxjs';
import { Response } from '../helpers/request-response.interface';
import { environment } from '../../environments/environment';
import { EducadoresList } from '../models/educadores.model';



@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    url = environment.url;
    list = new BehaviorSubject<UsuarioList[]>([]);
    educadores = new BehaviorSubject<UsuarioList[]>([]);
    loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    objeto = new BehaviorSubject<Usuario | undefined>(undefined);

    constructor(
        private http: HttpClient,
        private toastr: ToastrService,
    ) { }




    getEducador( loading: boolean = false) {
      this.loading.next(loading);


       return this.http.get<UsuarioList[]>(`${this.url}/Usuario/educador-list` )
           .pipe(tap({
               next: list => {
                   this.loading.next(false);
                   this.educadores.next(Object.assign([], list));
                   console.log('listt', list)
                   return of(list);






               },
               error: res => this.toastr.error('Não foi possível carregar listagem de educadores.')






           }));
   }





    getPerfil() {
      return this.http.get<any>(`${this.url}/Usuario/perfil-list`)
        .pipe(
          tap({
            next: list => {
             console.log(list)
            },
            error: res => this.toastr.error('Não foi possível carregar listagem de perfil.')
          })
        );
    }

    getList( loading: boolean = false) {
      this.loading.next(loading);
       return this.http.get<UsuarioList[]>(`${this.url}/Usuario` )
           .pipe(tap({
               next: list => {
                list = list.map(x => {
                  x.ativo = !x.dataDesativado;
                  return x;
              });
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

    put(request: Usuario) {
      return this.http.put<Response>(`${this.url}/Usuario`, request);
  }

    edit(request: Usuario) {
        return this.http.put(`${this.url}/Usuario`, request);
    }

    delete(id: number) {
        return this.http.delete<Response>(`${this.url}/Usuario/${id}`);
    }


    deactivated(id: number, ativo?: boolean) {
      return this.http.patch<Usuario>(`${this.url}/Usuario/${id}/${ativo}`, {});
  }

}


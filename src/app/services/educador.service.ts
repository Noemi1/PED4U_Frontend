import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of, tap } from 'rxjs';
import { Educadores, EducadoresList } from '../models/educadores.model';
import { environment } from '../../environments/environment.prod';
import { Response } from '../helpers/request-response.interface';
import { Observable } from 'rxjs';
import {  filter } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class EducadorService {
    url = environment.url;
    list = new BehaviorSubject<EducadoresList[]>([]);
    loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private toastr: ToastrService,
    ) { }

    // getList(loading: boolean = false) {
    //     return this.http.get<EducadoresList[]>(`${this.url}/Usuario/educador-list`)


    // }


    // getUsuarios(loading: boolean = false){
    //   return this.http.get<EducadoresList[]>(`${this.url}/Usuario`)
    //   .pipe(tap({
    //       next: list => {

    //         const filteredList = list.filter(item => item.perfilAcesso_Id === 1);
    //           this.list.next(Object.assign([], list));
    //           return of(filteredList);
    //       },
    //       error: res => this.toastr.error('Não foi possível carregar listagem de Educador.')

    //   }));
    // }


    getUsuarios(loading: boolean = false): Observable<EducadoresList[]> {
      return this.http.get<EducadoresList[]>(`${this.url}/Usuario`)
        .pipe(
          tap({
            next: list => {
              this.list.next(Object.assign([], list));
            },
            error: res => this.toastr.error('Não foi possível carregar listagem de Educador.')
          })
        );
    }
    getList(loading: boolean = false): Observable<EducadoresList[]> {
      return this.getUsuarios().pipe(
        switchMap(userList => {
          const filteredList = userList.filter(item => item.perfilAcesso_Id === 1);
          console.log('OI', filteredList)
          return of(filteredList); // Retornar filteredList aqui
        })
      );
    }


    get(id: number) {
      return this.http.get<Educadores>(`${this.url}/Usuario/${id}`, { headers: new HttpHeaders({ 'loading': 'true' }) })
      .pipe(tap({
          error: res => this.toastr.error('Não foi possível carregar Turmas.')
      }));
  }





  post(request: Educadores) {
     return this.http.post<Response>(`${this.url}/Usuario`, request);
  }


    put(request: Educadores) {
      return this.http.put<Response>(`${this.url}/Usuario`, request);
  }

    edit(request: Educadores) {
        return this.http.put(`${this.url}/Usuario`, request);
    }

    delete(id: number) {
        return this.http.delete<Response>(`${this.url}/Usuario/${id}`);
    }

}


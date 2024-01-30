import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of, tap } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Reposicao, ReposicaoList } from '../models/reposicao.model';
import { Response } from '../helpers/request-response.interface';
@Injectable({
    providedIn: 'root'
})
export class ReposicaoService {
    url = environment.url;

    list = new BehaviorSubject<ReposicaoList[]>([]);
    loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    private readonly TOKEN_NAME = 'teste'
    constructor(
        private http: HttpClient,
        private toastr: ToastrService,
    ) {

      this.loading.next(!!this.TOKEN_NAME)
     }



    getList( loading: boolean = false) {
      this.loading.next(loading);
       return this.http.get<ReposicaoList[]>(`${this.url}/ReposicaoFalta`)
           .pipe(tap({
               next: list => {
                   this.loading.next(false);
                   this.list.next(Object.assign([], list));
                   return of(list);
               },
               error: res => this.toastr.error('Não foi possível carregar listagem de reposicao.')
           }));
   }

    get(id: number) {
        return this.http.get<Reposicao>(`${this.url}/ReposicaoFalta/${id}`, { headers: new HttpHeaders({ 'loading': 'true' }) })
        .pipe(tap({
            error: res => this.toastr.error('Não foi possível carregar Reposicao.')
        }));
    }

   post(request: Reposicao) {
        return this.http.post<Response>(`${this.url}/ReposicaoFalta`, request);
    }

    edit(request: Reposicao) {
        return this.http.put(`${this.url}/ReposicaoFalta`, request);
    }

    delete(id: number) {
        return this.http.delete<Response>(`${this.url}/ReposicaoFalta/${id}`);
    }

}


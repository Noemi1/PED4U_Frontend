import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of, tap } from 'rxjs';
import { Response } from '../helpers/request-response.interface';
import { environment } from '../../environments/environment.prod';
import { ApostilaList, Apostila } from '../models/apostilas.model';

@Injectable({
    providedIn: 'root'
})
export class ApostilaService {
    url = environment.url;
    list = new BehaviorSubject<ApostilaList[]>([]);
    loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private toastr: ToastrService,
    ) { }

    getList(/* empresaId?: number, */ loading: boolean = false) {
      this.loading.next(loading);

       // empresaId = empresaId ?? this.empresaService.empresaSelected.value.id ?? '' as unknown as number ;
       return this.http.get<ApostilaList[]>(`${this.url}/ApostilaAbaco` /*/list/${empresaId} */)
           .pipe(tap({
               next: list => {
                   this.loading.next(false);
                   this.list.next(Object.assign([], list));
                   return of(list);
               },
               error: res => this.toastr.error('Não foi possível carregar listagem de apostilas.')

           }));
   }

    get(id: number) {
        return this.http.get<Apostila>(`${this.url}/ApostilaAbaco/${id}`, { headers: new HttpHeaders({ 'loading': 'true' }) })
        .pipe(tap({
            error: res => this.toastr.error('Não foi possível carregar Apostila Abaco.')
        }));
    }

    post(request: Apostila) {
        return this.http.post<Response>(`${this.url}/ApostilaAbaco`, request);
    }

    edit(request: Apostila) {
        return this.http.put(`${this.url}/ApostilaAbaco`, request);
    }

    delete(id: number) {
        return this.http.delete<Response>(`${this.url}/ApostilaAbaco/${id}`);
    }

}


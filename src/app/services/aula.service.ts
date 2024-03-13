import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Aula, AulaList } from '../models/aula.model';
import { Response } from '../helpers/request-response.interface';
import { LancarAula } from '../models/lancar-aula.model';
@Injectable({
    providedIn: 'root'
})
export class AulaService {
    url = environment.url;
    private idExportSubject = new BehaviorSubject<number | undefined>(undefined);
    list = new BehaviorSubject<AulaList[]>([]);
    loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    private readonly TOKEN_NAME = 'teste'
    constructor(
        private http: HttpClient,
        private toastr: ToastrService,
    ) {

      this.loading.next(!!this.TOKEN_NAME)
     }


     setIdExport(id: number | undefined): void {
      this.idExportSubject.next(id);
      console.log('confio' ,id)
    }

    getIdExport() {
      return this.idExportSubject.asObservable();
    }


    getList( loading: boolean = false, turma_id: number) {
      this.loading.next(loading);
       return this.http.get<AulaList[]>(`${this.url}/Aula/list/turma/${turma_id}`)
           .pipe(tap({
               next: list => {
                   this.loading.next(false);
                   this.list.next(Object.assign([], list));
                   console.log('listtt.',list, turma_id)
                   return of(list);

               },
               error: res => this.toastr.error('Não foi possível carregar listagem de Aula.')
           }));
   }


   getListTurma(){

   }

    get(id: number) {
        return this.http.get<Aula>(`${this.url}/Aula/${id}`, { headers: new HttpHeaders({ 'loading': 'true' }) })
        .pipe(tap({
            error: res => this.toastr.error('Não foi possível carregar Aula.')
        }));
    }

   post(request: LancarAula) {
        return this.http.post<Response>(`${this.url}/Aula`, request).pipe(tap({
          next: list => {
            this.loading.next(false);
            this.list.next(Object.assign([], list));
            console.log('listtt aula.',list)
            return of(list);

        }
        }));
    }

    edit(request: Aula) {
        return this.http.put(`${this.url}/Aula`, request);
    }

    delete(id: number) {
        return this.http.delete<Response>(`${this.url}/Aula/${id}`);
    }

}


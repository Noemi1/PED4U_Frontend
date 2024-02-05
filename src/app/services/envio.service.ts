import { ReposicaoService } from './reposicao.service';
import { Injectable } from '@angular/core';
import { ReposicaoList } from '../models/reposicao.model';

@Injectable({
  providedIn: 'root'
})
export class EnvioService {
  envioRealizadoComSucesso = false;

  list: ReposicaoList[] = []
  constructor(

  ) { }


}

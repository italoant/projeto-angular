import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as EventEmitter from 'events';


@Injectable({
  providedIn: 'root'
})
export class PesquisaService {


  apiA: string = 'https://kitsu.io/api/edge/anime'

  apiM: string = 'https://kitsu.io/api/edge/manga'

  pagePesquisa = new EventEmitter();

  popularA: string = 'anime?sort=-popularityRank';

  popularM: string = 'manga?sort=-popularityRank';
  

  search: any = ''

  private readonly Pesquisa = `https://kitsu.io/api/edge/`

  
  

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    return this.http.get(this.apiA);
  }

  listM(): Observable<any> {
    return this.http.get(this.apiM);
  }


  listPequisa(): Observable<any>{
    return this.http.get(this.Pesquisa + this.popularA)
  }

  listPequisaM(): Observable<any>{
    return this.http.get(this.Pesquisa + this.popularM)
  }

  buscarManga(search): Observable<any>{
    return this.http.get(this.apiM + '?filter[text]=' + search)
  }


  buscar(search): Observable<any>{
    return this.http.get(this.apiA + '?filter[text]=' +  search)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PesquisaService {


  api: string = 'https://kitsu.io/api/edge/'

  popular: string = '?sort=-popularityRank';

  pesquisa: string = `https://kitsu.io/api/edge/`

  paginacao: string = '?page[limit]=6&page[offset]='

  pagina: number = 0;



  constructor(private http: HttpClient) { }

  list(page): Observable<any>{
    return this.http.get(this.api + page + this.paginacao + this.pagina);
  }

  listPequisa(page): Observable<any>{
    return this.http.get(this.pesquisa + page + this.popular)
  }


  buscar(search, pagina): Observable<any>{
    return this.http.get(this.api + pagina + '?filter[text]=' +  search)
  }
}

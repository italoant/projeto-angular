import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PesquisaService {


  private readonly API = environment.API

  popular: string = '?sort=-popularityRank';

  pesquisa: string = `https://kitsu.io/api/edge/`

  paginacao: string = '?page[limit]=6&page[offset]='

  pagina: number = 0;



  constructor(private http: HttpClient) { }

  list(page): Observable<any>{
    return this.http.get(this.API + page + this.paginacao + this.pagina)
    .pipe(
      delay(2000)
    );
  }

  listPequisa(page): Observable<any>{
    return this.http.get(this.pesquisa + page + this.popular)
  }


  buscar(search, pagina): Observable<any>{
    return this.http.get(this.API + pagina + '?filter[text]=' +  search)
  }
}

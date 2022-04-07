import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PesquisaService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['../animeManga.component.css']
})
export class AnimeComponent implements OnInit {

  constructor(
    private service: PesquisaService
    ){ }

  subs: Subscription

  respPesquisa = Array();

  returnPesquisa = Array();

  searchAnime: string = ''

  titulo: any = 'Animes populares'


  ngOnInit(): void {
    this.subs = this.service.listPequisa()
    .subscribe(resp => this.respPesquisa = resp.data);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  showA(){
    if(this.returnPesquisa.length === 0){
      this.returnPesquisa = this.respPesquisa
      return this.returnPesquisa
    } else{
      return this.returnPesquisa
    }
  }

  detalhesA(e){
    localStorage.setItem('detalhes', JSON.stringify(e))
  }


  consultarAnime(){
    if(this.searchAnime.length !== 0){
      this.service.buscar(this.searchAnime)
      .subscribe(resp => this.returnPesquisa = resp.data)
        this.titulo = 'você está pesquisando por: ' + this.searchAnime
        return this.titulo
    }
      this.titulo = 'Animes populares'
      this.returnPesquisa = this.respPesquisa
      return this.titulo
  }

}

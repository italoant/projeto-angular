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

  resultado: string = ''

  populares: string = ''

  ngOnInit(): void {
    this.subs = this.service.listPequisa()
    .subscribe(resp => this.respPesquisa = resp.data);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


  buscar(){
    if(this.searchAnime.length !== 0){
      this.service.buscar(this.searchAnime)
      .subscribe(resp => this.returnPesquisa = resp.data)
       this.resultado = 'você está pesquisando por: ' + this.searchAnime
       this.populares = ''
    } else{
      this.resultado = ''
      this.populares = 'animes populares'
      this.returnPesquisa = this.respPesquisa
      
    }
   
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
    localStorage.setItem('anime', JSON.stringify(e))
  }


}

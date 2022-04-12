import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { delay, Subscription } from 'rxjs';
import { PesquisaService } from 'src/app/shared/pesquisa.service';


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
    this.subs = this.service.listPequisa('anime')
    .subscribe(resp => {
      setTimeout(() => {this.respPesquisa = resp.data}, 2000)
      });

  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  loadingFundo(){
    if(this.returnPesquisa.length === 0){
      return 'bg-loading'
    }
      return null
  }
  loadingImg(){
    if(this.returnPesquisa.length === 0){
      return '/assets/loading.png'
    }
      return null
  }

  showA(){
    if(this.returnPesquisa.length != 0){
      return this.returnPesquisa
    } 
      return null
      
  }

  detalhesA(e){
    localStorage.setItem('detalhes', JSON.stringify(e))
  }


  consultar(){
    if(this.searchAnime.length !== 0){
      this.service.buscar(this.searchAnime, 'anime')
      .subscribe(resp => this.returnPesquisa = resp.data)
        this.titulo = 'você está pesquisando por: ' + this.searchAnime
        return this.titulo
    }
      this.titulo = 'Animes populares'
      this.returnPesquisa = this.respPesquisa
      return this.titulo
  }

}

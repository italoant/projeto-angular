import { Component, OnInit } from '@angular/core';
import { PesquisaService } from 'src/app/shared/pesquisa.service';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['../animeManga.component.css']
})
export class MangasComponent implements OnInit {

  constructor(private service: PesquisaService) { }

  respPesquisa = Array();

  returnPesquisaManga = Array();

  searchManga: string = ''

  titulo: any = 'Mangas Populares';

  ngOnInit(): void {
    this.service.listPequisa('manga')
    .subscribe(resp => {
      setTimeout(() => {this.respPesquisa = resp.data}, 2000)
    });
  }


  loadingFundo(){
    if(this.returnPesquisaManga.length === 0){
      return 'bg-loading'
    }
      return null
  }
  loadingImg(){
    if(this.returnPesquisaManga.length === 0){
      return '/assets/loading.png'
    }
      return null
  }


  showA(){
    if(this.returnPesquisaManga.length === 0){
      return null
    } else{
      return this.returnPesquisaManga
    }
  }

  detalhesM(e){
    localStorage.setItem('detalhes', JSON.stringify(e))
  }

  consultar(){
    if(this.searchManga.length !== 0){
      this.service.buscar(this.searchManga, 'manga')
      .subscribe(resp => this.returnPesquisaManga = resp.data)
        this.titulo = 'você está pesquisando por: ' + this.searchManga
        return this.titulo
    }
      this.titulo = 'Mangas populares'
      this.returnPesquisaManga = this.respPesquisa
      return this.titulo
  }


}

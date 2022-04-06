import { Component, OnInit } from '@angular/core';
import { PesquisaService } from 'src/app/shared/shared.service';

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

  resultado: string = ''

  populares: string = ''

  ngOnInit(): void {
    this.service.listPequisaM()
    .subscribe(resp => this.respPesquisa = resp.data);
  }


  buscarManga(){
    if(this.searchManga.length !== 0){
      this.service.buscarManga(this.searchManga)
      .subscribe(resp => this.returnPesquisaManga = resp.data)
       this.resultado = 'você está pesquisando por: ' + this.searchManga
       this.populares = ''
    } else{
      this.returnPesquisaManga = this.respPesquisa
      this.populares = 'mangas populares'
      this.resultado = ''
    }
   
  }

  showA(){
    if(this.returnPesquisaManga.length === 0){
      this.returnPesquisaManga = this.respPesquisa
      return this.returnPesquisaManga
    } else{
      return this.returnPesquisaManga
    }
  }

  detalhesM(e){
    localStorage.setItem('manga', JSON.stringify(e))
  }


}

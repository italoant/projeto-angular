import { Component, OnInit } from '@angular/core';
import { PesquisaService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: PesquisaService) { }
  
  anime = Array();
  manga = Array();

  loading: boolean = false
  

  
  ngOnInit(): void {
   this.service.list()
    .subscribe(dados => this.anime = dados.data);
    this.service.listM()
    .subscribe(dadosM => this.manga = dadosM.data)
    
  }
  show(){
    if(this.anime.length === 0){
      return false
    } else{
      this.anime = this.anime.slice(0,6)
      this.manga = this.manga.slice(0,6)
      return true
    }
  }
  detalhesAnime(e){
    localStorage.setItem('anime', JSON.stringify(e))

  }

  detalhesManga(e){
    localStorage.setItem('manga',  JSON.stringify(e))
  }

}

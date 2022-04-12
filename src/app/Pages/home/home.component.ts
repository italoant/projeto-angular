import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { PesquisaService } from 'src/app/shared/pesquisa.service';


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

  paginas = Array();

  
  ngOnInit(): void {
   this.service.list('anime')
    .subscribe(dados => {
      setTimeout(() => (this.anime = dados.data), 3000)
    });
    this.service.list('manga')
    .subscribe(dadosM => {
      setTimeout(() => (this.manga = dadosM.data), 3000)
    })
    
  }


  show(){
    if(this.anime.length === 0 && this.manga.length === 0){
      return false
    } else{
      return true
    }
  }
  detalhes(e){
    localStorage.setItem('detalhes', JSON.stringify(e))

  }

  
  loadingFundo(){
    if(this.anime.length === 0 && this.manga.length === 0){
      return 'bg-loading'
    }
      return null
  }
  loadingImg(){
    if(this.anime.length === 0 && this.manga.length === 0){
      return '/assets/loading.png'
    }
      return null
  }

  nextPage(){
    if(this.service.pagina < 30)
    this.service.pagina = this.service.pagina + 6
    this.service.list('anime')
    .subscribe(dados => this.anime = dados.data);
    this.loadingFundo()
    this.loadingImg()
  }

  previousPage(){
    if(this.service.pagina >= 6)
    this.service.pagina = this.service.pagina - 6
    this.service.list('anime')
    .subscribe(dados => this.anime = dados.data);
    this.loadingFundo()
    this.loadingImg()

    
  }

  nextPageM(){
    if(this.service.pagina < 30)
    this.service.pagina = this.service.pagina + 6
    this.service.list('manga')
    .subscribe(dados => this.manga = dados.data);
  }

  previousPageM(){
    if(this.service.pagina >= 6)
    this.service.pagina = this.service.pagina - 6
    this.service.list('manga')
    .subscribe(dados => this.manga = dados.data);
    
  }

}

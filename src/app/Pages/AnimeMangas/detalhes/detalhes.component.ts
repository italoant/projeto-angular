import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  animeLocal = localStorage.getItem('detalhes');

  imagemNaoLocalizada: string = '/assets/imagem_nao_disponivel.png'

  respostaClick = JSON.parse(this.animeLocal);




  constructor() { }


  
  ngOnInit(): void {
   
  }

  imagemBanner(){
    if(this.respostaClick.attributes.coverImage == null || this.respostaClick.attributes.coverImage.small == null){
      return this.imagemNaoLocalizada
    } else {
      return this.respostaClick.attributes.coverImage.small
    }
  }
    

  deleteInfo(){
    localStorage.removeItem('detalhes')
  }
}

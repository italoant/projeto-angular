import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  animeLocal = localStorage.getItem('detalhes');
  respostaClick = JSON.parse(this.animeLocal);




  constructor() { }


  
  ngOnInit(): void {
   
  }

  deleteInfo(){
    localStorage.removeItem('detalhes')
  }
}

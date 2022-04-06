import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  animeLocal = localStorage.getItem('anime');
  respostaClick = JSON.parse(this.animeLocal);

  mangaLocal = localStorage.getItem('manga');
  // respostaClick = JSON.parse(this.mangaLocal);



  constructor() { }


  
  ngOnInit(): void {
   
  }

  deleteInfo(){
    localStorage.removeItem('anime')
    localStorage.removeItem('manga')
  }
}

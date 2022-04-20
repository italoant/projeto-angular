import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PesquisaService } from 'src/app/shared/pesquisa.service';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['../animeManga.component.scss']
})
export class MangasComponent implements OnInit {

  constructor(private service: PesquisaService) { }

  respPesquisa = Array();

  subs: Subscription;

  searchManga: string = ''

  titulo: any = 'Mangas Populares';

  ngOnInit(): void {
    this.service.listPequisa('manga')
      .subscribe(resp => {
        setTimeout(() => { this.respPesquisa = resp.data }, 1000)
      });
  }



  loadingFundo() {
    if (this.respPesquisa.length === 0) {
      return 'bg-loading'
    }
    return null
  }
  loadingImg() {
    if (this.respPesquisa.length === 0) {
      return '/assets/loading.png'
    }
    return null
  }


  show() {
    if (this.respPesquisa.length != 0) {
      return this.respPesquisa
    } else {
      return null
    }
  }
  

  detalhesM(e) {
    localStorage.setItem('detalhes', JSON.stringify(e))
  }

  consultar() {
    if (this.searchManga.length != 0) {
      this.service.buscar(this.searchManga, 'manga')
      .subscribe(resp => {
        setTimeout(() => { this.respPesquisa = resp.data }, 1200)
      });
    } else{
      this.service.listPequisa('manga')
      .subscribe(resp => {
        setTimeout(() => { this.respPesquisa = resp.data }, 1200)
      });
    }

  }

  mudarTitulo() {
    if (this.searchManga.length !== 0) {
      this.titulo = 'você está pesquisando por: ' + this.searchManga
      return this.titulo
    }
    this.titulo = 'Mangas populares'
    return this.titulo
  }




}

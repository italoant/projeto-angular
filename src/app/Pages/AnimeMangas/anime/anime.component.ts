import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { catchError, delay, Subscription } from 'rxjs';
import { PesquisaService } from 'src/app/shared/pesquisa.service';


@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['../animeManga.component.scss']
})
export class AnimeComponent implements OnInit {

  constructor(
    private service: PesquisaService
  ) { }

  subs: Subscription;

  respPesquisa = Array();

  searchAnime: string = ''

  titulo: any = 'Animes populares'


  ngOnInit(): void {
    this.subs = this.service.listPequisa('anime')
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
    }
    return null

  }

  detalhesA(e) {
    localStorage.setItem('detalhes', JSON.stringify(e))
  }




  consultar() {
    if (this.searchAnime.length != 0) {
      this.service.buscar(this.searchAnime, 'anime')
        .subscribe(resp => {
          setTimeout(() => { this.respPesquisa = resp.data }, 1200)
        });
    } else {
      this.service.listPequisa('anime')
        .subscribe(resp => {
          setTimeout(() => { this.respPesquisa = resp.data }, 1200)
        });
    }
  }

  mudarTitulo() {
    if (this.searchAnime.length !== 0) {
      this.titulo = 'você está pesquisando por: ' + this.searchAnime
      return this.titulo
    }
    this.titulo = 'Animes populares'
    return this.titulo
  }
}

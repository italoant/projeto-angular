import { Component, OnInit } from '@angular/core';
import { delay, Subscription } from 'rxjs';
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

  subsAnime: Subscription;
  subsManga: Subscription;

  loading: boolean = false

  paginas = Array();


  ngOnInit(): void {
    this.subsAnime = this.service.list('anime')
      .subscribe(dados => {
        setTimeout(() => (this.anime = dados.data), 2000)
      });
    this.subsManga = this.service.list('manga')
      .subscribe(dadosM => {
        setTimeout(() => (this.manga = dadosM.data), 2000)
      })

  }

  ngOnDestroy(): void {
    this.subsAnime.unsubscribe();
    this.subsManga.unsubscribe();

  }


  show() {
    if (this.anime.length === 0 && this.manga.length === 0) {
      return false
    } else {
      return true
    }
  }
  detalhes(e) {
    localStorage.setItem('detalhes', JSON.stringify(e))

  }


  loadingFundo() {
    if (this.anime.length === 0 && this.manga.length === 0) {
      this.loading = false
      return 'bg-loading'
    }
    this.loading = true
    return null
  }
  loadingImg() {
    if (this.anime.length === 0 && this.manga.length === 0) {
      return '/assets/loading.png'
    }
    return null
  }

  nextPage() {
    if (this.service.pagina < 30)
      this.service.pagina = this.service.pagina + 6
    this.service.list('anime')
      .subscribe(dados => this.anime = dados.data);
    this.loadingFundo()
    this.loadingImg()
  }

  previousPage() {
    if (this.service.pagina >= 6)
      this.service.pagina = this.service.pagina - 6
    this.service.list('anime')
      .subscribe(dados => this.anime = dados.data);
    this.loadingFundo()
    this.loadingImg()


  }

  nextPageM() {
    if (this.service.pagina < 30)
      this.service.pagina = this.service.pagina + 6
    this.service.list('manga')
      .subscribe(dados => this.manga = dados.data);
  }

  previousPageM() {
    if (this.service.pagina >= 6)
      this.service.pagina = this.service.pagina - 6
    this.service.list('manga')
      .subscribe(dados => this.manga = dados.data);

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { authService } from 'src/app/shared/authService';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  trocarNav: boolean = false;

  nome: string = localStorage.getItem('nome')

  imagem: string = localStorage.getItem('imagem');

  inscricao: Subscription;

  yingyang: string = localStorage.getItem('yingyang')

  darkMode: string = localStorage.getItem('')

  constructor(
    private router: Router,
    private serviceAuth: authService  
  ) { }

  ngOnInit(): void {
    this.serviceAuth.usuarioLogado.subscribe(
      resp => this.trocarNav = resp
    )
    localStorage.setItem('yingyang', '../../../assets/theme1.png')
    
  
  }

  setTheme(){
    document.body.classList.toggle('dark')

    
    if (localStorage.getItem('yingyang') === '../../../assets/theme2.png') {
      localStorage.setItem('yingyang', '../../../assets/theme1.png')
    } else {
      localStorage.setItem('yingyang', '../../../assets/theme2.png')
    }
    this.yingyang = localStorage.getItem('yingyang')
  }

  deslog(){
    localStorage.removeItem('logado')
    this.serviceAuth.usuarioLogado.emit(false)
    this.trocarNav = false
    this.router.navigate([''])   
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { authService } from 'src/app/shared/authService';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  trocarNav: boolean = false;

  inscricao: Subscription;

  constructor(
    private router: Router,
    private serviceAuth: authService  
  ) { }

  ngOnInit(): void {
    this.inscricao = this.serviceAuth.usuarioLogado.subscribe(
      resp => this.trocarNav = resp
    )

  
  }

  deslog(){
    localStorage.removeItem('logado')
    this.serviceAuth.usuarioLogado.emit(false)
    this.trocarNav = false
    this.router.navigate([''])    
  }

}

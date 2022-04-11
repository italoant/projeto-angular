import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from 'src/app/shared/authService';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private router: Router,
    private serviceAuth: authService,
    private logado: authService
  ) { }

  usuario: string;

  email: string;

  data: any;

  imagem: string ;


  ngOnInit(): void {
    this.usuario = localStorage.getItem('user')
    this.email = localStorage.getItem('email')
    this.data = localStorage.getItem('date')
    this.imagem = localStorage.getItem('imagem')
  }

  trocarImg(){

  }

  deleteAcc(){
    localStorage.removeItem("user");
    localStorage.removeItem('email');
    localStorage.removeItem('date');
    localStorage.removeItem('nome');
    localStorage.removeItem('pass');
    localStorage.removeItem('logado')
    // this.logado.logado()
    this.serviceAuth.usuarioLogado.emit(false)
    this.router.navigate([''])
  }

}

import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { authService } from 'src/app/shared/authService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../forms.component.css']
})
export class LoginComponent implements OnInit {

  userlocal: string  = localStorage.getItem('user') //capturar cadastro
  senhalocal: any  = localStorage.getItem('senha')  //capturar cadastro

  user: string //capturar valor do input
  senha: any//capturar valor do input

  checkUser: string //variaveis que vao receber o valor do imput e comparar com localstorage
  checkSenha: any //variaveis que vao receber o valor do imput e comparar com localstorage

  mensagem: string //mensagem de erro user


  userLogedOn: boolean = false


  constructor(
    private router: Router,
    private logado: authService
  ) { }

  ngOnInit(): void {
    
  }

  login(){
    this.checkUser = this.user
    this.checkSenha = this.senha
    if(this.checkUser !== this.userlocal && this.checkSenha !== this.senhalocal){
      this.mensagem = 'usuario e senha incorreto' 
    } else if (this.checkUser !== this.userlocal && this.checkSenha === this.senhalocal) {
      this.mensagem = 'usuario incorreto'
    } else if (this.checkUser === this.userlocal && this.checkSenha !== this.senhalocal) {
      this.mensagem = 'senha incorreta'
    } else{
      localStorage.setItem('logado', 'true')
      this.logado.usuarioLogado.subscribe(
        logou => this.userLogedOn = logou
      )
      this.logado.logado()
      this.router.navigate([''])
    }
  }

}

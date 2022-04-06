import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['../forms.component.css']
})
export class CadastroComponent implements OnInit {

  mensagem: string = ''

  nome: string = ''

  user: string = ''

  email: any = ''

  senha: any = ''

  dataNascimento: any = Array();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  salvarDados() {
    if (this.nome === '') {
      this.mensagem = 'preencha o campo com seu nome'
    } else if (this.user === '') {
      this.mensagem = 'preencha o campo com seu usuario'
    } else if (this.email === '') {
      this.mensagem = 'preencha o campo com seu email'
    } else if (this.senha === '' || this.senha.length < 5) {
      this.mensagem = 'a senha deve ter no minimo 8 digitos'
    } else {
      localStorage.setItem('nome', this.nome)
      localStorage.setItem('user', this.user)
      localStorage.setItem('email', this.email)
      localStorage.setItem('senha', this.senha)
      localStorage.setItem('data', this.dataNascimento)
      this.router.navigate(['/login'])
    }

  }

  limpar() {
    this.nome = ''
    this.user = ''
    this.email = ''
    this.senha = ''
  }

}

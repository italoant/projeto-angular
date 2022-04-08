import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { authService } from 'src/app/shared/authService';
import { PesquisaService } from 'src/app/shared/pesquisa.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../forms.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  userLogedOn: boolean = false

  mensagem: string;


  constructor(
    private router: Router,
    private logado: authService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      user: [null, Validators.required],
      pass: [null, Validators.required],
    })

  }

  verificarMudancas(campo: string) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched
  }

  aplicarCss(campo: string) {
    return {
      'has-error': this.verificarMudancas(campo),
      'has-feedback': this.verificarMudancas(campo)
    }
  }

  onSubmit() {
    if (this.formulario.value.user === localStorage.getItem('user') && this.formulario.value.pass === localStorage.getItem('pass')) {
      localStorage.setItem('logado', 'true')
          this.logado.usuarioLogado.subscribe(
            logou => this.userLogedOn = logou
          )
          this.logado.logado()
      this.router.navigate([''])
    } else {
      this.mensagem = 'Usuario ou Senha invalidos'
      this.formulario.reset()
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { authService } from 'src/app/shared/authService';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../forms.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

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
    if (this.formulario.valid && this.formulario.value.user === localStorage.getItem('nome') && this.formulario.value.pass === localStorage.getItem('pass')) {
      localStorage.setItem('logado', 'true')
      localStorage.setItem('imagem', 
      'https://img.elo7.com.br/product/zoom/342ED94/painel-de-festa-3d-sublimada-pantera-cor-de-rosa-1-50x1-50-painel-de-festa-redondo-da-pantera-cor-de.jpg')
      
      this.logado.usuarioLogado.emit(true)
      this.router.navigate([''])
    } else {
      this.mensagem = 'Usuario ou Senha invalido'
      this.formulario.reset()
    }
  }

}

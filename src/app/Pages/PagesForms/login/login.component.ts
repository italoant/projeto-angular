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
    if (this.formulario.valid) {
      localStorage.setItem('logado', 'true')
      localStorage.setItem('imagem', 
      'https://images.tcdn.com.br/img/img_prod/697730/adesivo_lateral_vidro_caminhao_carro_decorativo_pantera_cor_de_rosa_1147486528_1_6704304bea8d50ab62a3eef851fc63ea.jpg')
      
      this.logado.usuarioLogado.emit(true)
      this.router.navigate([''])
    } else {
      this.mensagem = 'Usuario ou Senha invalido'
      this.formulario.reset()
    }
  }

}

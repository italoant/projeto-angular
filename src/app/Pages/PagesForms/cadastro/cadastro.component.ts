import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['../forms.component.css']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      user: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required,Validators.email]],
      pass: [null, [Validators.required,Validators.minLength(8), Validators.maxLength(16)]],
      date: [null, Validators.pattern("^(?:(?:(?:(?:[13579][26]|[2468][048])00)|(?:[0-9]{2}(?:(?:[13579][26])|(?:[2468][048]|0[48]))))(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:0[1-9]|1[0-9]|2[0-9]))))|(?:[0-9]{4}(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:[01][0-9]|2[0-8]))))$")]
    })
    

  }

  verificarMudancas(campo: string){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched 
  }

  aplicarCss(campo: string){
    return {
      'has-error': this.verificarMudancas(campo),
      'has-feedback': this.verificarMudancas(campo)
    }
  }



  onSubmit(){
    localStorage.setItem('nome', this.formulario.value.nome)
    localStorage.setItem('user', this.formulario.value.user)
    localStorage.setItem('email', this.formulario.value.email)
    localStorage.setItem('pass', this.formulario.value.pass)
    localStorage.setItem('date', this.formulario.value.date)

    if(this.formulario.value.nome && this.formulario.value.user &&
      this.formulario.value.email && this.formulario.value.pass &&
      this.formulario.value.date !== null)
      this.router.navigate([''])
  }


  limpar() {
    this.formulario.reset()
  }

}

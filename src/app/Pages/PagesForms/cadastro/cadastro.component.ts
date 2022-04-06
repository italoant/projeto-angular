import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null],
      user: [null],
      email: [null],
      pass: [null],
    })

  }



  onSubmit(){

    this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log(dados)
        this.formulario.reset()
    },((error:any) => {console.log("error")}))
    
    console.log(this.formulario)

  }


  limpar() {
    this.formulario.reset()
  }

}

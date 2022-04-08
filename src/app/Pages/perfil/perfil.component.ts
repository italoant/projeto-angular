import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  usuario: string;

  email: string;

  data: any;


  ngOnInit(): void {
    this.usuario = localStorage.getItem('user')
    this.email = localStorage.getItem('email')
    this.data = localStorage.getItem('date')
  }

  deleteAcc(){
    localStorage.removeItem("user");
    localStorage.removeItem('email');
    localStorage.removeItem('date');
    localStorage.removeItem('nome');
    localStorage.removeItem('pass');
    localStorage.setItem('logado', 'false')
  }

}

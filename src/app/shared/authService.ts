import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class authService {

  userOn = localStorage.getItem('logado')

  usuarioLogado = new EventEmitter();

  
  constructor() { }
  
  logado(){
    if(this.userOn !== ''){
      this.usuarioLogado.emit(true)
    } else{
      this.usuarioLogado.emit(false)
    }
  }
}
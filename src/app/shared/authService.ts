import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class authService {

  userOn: any;

  usuarioLogado = new EventEmitter();

  
  constructor() { }
  
  
  // logado(){
  //   if(this.userOn === '' || this.userOn === null || this.userOn === undefined){
  //     this.usuarioLogado.emit(false)

  //   } 
  //     this.usuarioLogado.emit(true)

  // }
}
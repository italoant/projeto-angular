import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class authService {

  usuarioLogado = new EventEmitter();

  theme = new EventEmitter<boolean>();

  
  constructor() { }
  

}
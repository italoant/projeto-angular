import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';



import { authService } from '../shared/authService';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  navegacaoOn: boolean;

  constructor(
    private authService: authService,
    private router: Router
 ){}

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
      this.authService.usuarioLogado.subscribe(
        resp => this.navegacaoOn =  resp
      )
      if(this.navegacaoOn === true) {
       return true
      }
      this.router.navigate(['/login'])
      return false
  }
}


import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';


const appRoutesForms = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent }
];




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutesForms)
  ],
  exports:[
    RouterModule
  ]
})
export class PagesFormsRoutingModule { }

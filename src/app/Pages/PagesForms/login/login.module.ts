import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PagesFormsRoutingModule } from '../pages-forms-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesFormsRoutingModule
  ]
})
export class LoginModule { }

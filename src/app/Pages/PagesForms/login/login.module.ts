import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { PagesFormsRoutingModule } from '../pages-forms-routing.module';
import { CampoErrorModule } from '../campo-error/campo-error.module';

import { LoginComponent } from './login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CampoErrorModule,
    PagesFormsRoutingModule
  ]
})
export class LoginModule { }

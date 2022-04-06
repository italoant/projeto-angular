import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { PagesFormsRoutingModule } from '../pages-forms-routing.module';
import { CadastroComponent } from './cadastro.component';



@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesFormsRoutingModule
  ]
})
export class CadastroModule { }

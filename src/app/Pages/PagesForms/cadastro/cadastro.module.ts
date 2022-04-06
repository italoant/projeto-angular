import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PagesFormsRoutingModule } from '../pages-forms-routing.module';
import { CadastroComponent } from './cadastro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesFormsRoutingModule
  ]
})
export class CadastroModule { }

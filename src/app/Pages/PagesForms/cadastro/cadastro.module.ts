import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { PagesFormsRoutingModule } from '../pages-forms-routing.module';
import { CadastroComponent } from './cadastro.component';
import { CampoErrorComponent } from '../campo-error/campo-error.component';
import { CampoErrorModule } from '../campo-error/campo-error.module';



@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CampoErrorModule,
    PagesFormsRoutingModule
  ]
})
export class CadastroModule { }

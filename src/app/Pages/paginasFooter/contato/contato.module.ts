import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterRoutingModule } from '../footer-routing.module';

import { ContatoComponent } from './contato.component';



@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule
  ]
})
export class ContatoModule { }

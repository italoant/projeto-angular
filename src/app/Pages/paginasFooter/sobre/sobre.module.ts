import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SobreComponent } from './sobre.component';

import { FooterRoutingModule } from '../footer-routing.module';



@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule
  ]
})
export class SobreModule { }

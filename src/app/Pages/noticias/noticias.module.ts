import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NoticiasRoutingModule } from './noticias-routing.module';

import { NoticiasComponent } from './noticias.component';



@NgModule({
  declarations: [
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule
  ]
})
export class NoticiasModule { }

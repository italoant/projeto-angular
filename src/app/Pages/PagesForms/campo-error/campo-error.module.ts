import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesFormsRoutingModule } from '../pages-forms-routing.module';
import { CampoErrorComponent } from './campo-error.component';



@NgModule({
  declarations: [
    CampoErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CampoErrorComponent
  ]
})
export class CampoErrorModule { }

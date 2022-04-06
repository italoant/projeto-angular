import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { NoticiasComponent } from './noticias.component';


const appRoutesNoticias: Routes = [
  { path: 'noticias', component: NoticiasComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(appRoutesNoticias);


@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(appRoutesNoticias)
  ],
  exports: [
    RouterModule
  ]
})
export class NoticiasRoutingModule { }

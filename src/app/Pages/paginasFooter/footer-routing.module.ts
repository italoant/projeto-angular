import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ContatoComponent } from './contato/contato.component';
import { EquipeComponent } from './equipe/equipe.component';
import { SobreComponent } from './sobre/sobre.component';


const appRoutesFooterPages = [
  { path: 'contato', component: ContatoComponent},
  { path: 'equipe', component: EquipeComponent },
  { path: 'sobre', component: SobreComponent }
];




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutesFooterPages)
  ],
  exports:[
    RouterModule
  ]
})
export class FooterRoutingModule { }

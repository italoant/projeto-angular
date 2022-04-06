import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { routingTelasModule } from '../routing.animeMangas.module';
import { DetalhesComponent } from './detalhes.component';
import { AnimeComponent } from '../anime/anime.component';
import { MangasComponent } from '../mangas/mangas.component';



@NgModule({
  declarations: [
    DetalhesComponent,
  ],
  imports: [
    CommonModule,
    routingTelasModule
  ]
})
export class DetalhesModule { }

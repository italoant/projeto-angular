import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AnimeComponent } from './anime.component';
import { PesquisaService } from 'src/app/shared/shared.service';
import { routingTelasModule } from '../routing.animeMangas.module';




@NgModule({
  declarations: [
    AnimeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    routingTelasModule
  ],
  providers: [PesquisaService]
})
export class AnimeModule { }

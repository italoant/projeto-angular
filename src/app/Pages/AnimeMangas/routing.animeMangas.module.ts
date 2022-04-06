import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { authGuard } from 'src/app/guards/aurh-guard';



import { AnimeComponent } from './anime/anime.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { MangasComponent } from './mangas/mangas.component';





const appRoutesTelas = [
  {path: 'anime', component: AnimeComponent,
    canActivate: [authGuard]
},
  {path: 'manga', component: MangasComponent,
    canActivate: [authGuard]
},
  {path: 'detalhes', component: DetalhesComponent,
  canActivate: [authGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutesTelas)
  ],
  exports: [
    RouterModule,
  ]
})
export class routingTelasModule { }
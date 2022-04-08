import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';


import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './Pages/home/home.module';
import { AnimeModule } from './Pages/AnimeMangas/anime/anime.module';
import { NoticiasModule } from './Pages/noticias/noticias.module';
import { MangasModule } from './Pages/AnimeMangas/mangas/mangas.module';
import { DetalhesModule } from './Pages/AnimeMangas/detalhes/detalhes.module';
import { LoginModule } from './Pages/PagesForms/login/login.module';
import { CadastroModule } from './Pages/PagesForms/cadastro/cadastro.module';
import { authGuard } from './guards/aurh-guard';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { PerfilModule } from './Pages/perfil/perfil.module';
import { ContatoComponent } from './Pages/paginasFooter/contato/contato.component';
import { EquipeComponent } from './Pages/paginasFooter/equipe/equipe.component';
import { SobreComponent } from './Pages/paginasFooter/sobre/sobre.component';
import { EquipeModule } from './Pages/paginasFooter/equipe/equipe.module';
import { SobreModule } from './Pages/paginasFooter/sobre/sobre.module';
import { ContatoModule } from './Pages/paginasFooter/contato/contato.module';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    HttpClientModule,
    AnimeModule,
    MangasModule,
    NoticiasModule,
    DetalhesModule,
    LoginModule,
    CadastroModule,
    PerfilModule,
    EquipeModule,
    SobreModule,
    ContatoModule,
    AppRoutingModule
  ],
  providers: [
    authGuard,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

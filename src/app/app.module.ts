import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
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



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    NotFoundComponent
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
    AppRoutingModule
  ],
  providers: [authGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

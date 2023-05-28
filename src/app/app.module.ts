import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { MaterialModule } from 'src/shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AdoptedComponent } from './pages/adopted/adopted.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { InAdoptionComponent } from './pages/in-adoption/in-adoption.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdoptFormComponent } from './pages/adopt-form/adopt-form.component';
import { FavoritesCardComponent } from './components/favorites-card/favorites-card.component';
import { FinalAdoptionComponent } from './pages/final-adoption/final-adoption.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FavoritesComponent,
    AdoptedComponent,
    PokemonCardComponent,
    InAdoptionComponent,
    NotFoundComponent,
    AdoptFormComponent,
    FavoritesCardComponent,
    FinalAdoptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

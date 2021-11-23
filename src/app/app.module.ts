import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './superHeroesShop/Header/header.component';
import { NavHeroesComponent } from './superHeroesShop/Header/nav-heroes/nav-heroes.component';
import { CarouselComponent } from './superHeroesShop/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesTarjetasComponent } from './superHeroesShop/paginas/heroes-tarjetas/heroes-tarjetas.component';
import { FigurasComponent } from './superHeroesShop/paginas/figuras/figuras.component';
import { LegoComponent } from './superHeroesShop/paginas/lego/lego.component';
import { RopaComponent } from './superHeroesShop/paginas/ropa/ropa.component';
import { DisfracesComponent } from './superHeroesShop/paginas/disfraces/disfraces.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './superHeroesShop/paginas/registro/registro.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './superHeroesShop/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavHeroesComponent,
    CarouselComponent,
    HeroesTarjetasComponent,
    FigurasComponent,
    LegoComponent,
    RopaComponent,
    DisfracesComponent,
    RegistroComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

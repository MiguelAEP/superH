import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisfracesComponent } from './superHeroesShop/paginas/disfraces/disfraces.component';
import { FigurasComponent } from './superHeroesShop/paginas/figuras/figuras.component';
import { HeroesTarjetasComponent } from './superHeroesShop/paginas/heroes-tarjetas/heroes-tarjetas.component';
import { LegoComponent } from './superHeroesShop/paginas/lego/lego.component';
import { RegistroComponent } from './superHeroesShop/paginas/registro/registro.component';
import { RopaComponent } from './superHeroesShop/paginas/ropa/ropa.component';

const routes: Routes = [
  {
    path:'',
    component: HeroesTarjetasComponent
  },
  {
    path:'inicio',
    component: HeroesTarjetasComponent
  },
  {
    path:'figuras',
    component: FigurasComponent
  },
  {
    path:'figuras/:nombre',
    component: FigurasComponent
  },

  {
    path:'lego',
    component: LegoComponent
  },
  {
    path:'lego/:nombre',
    component: LegoComponent
  },
 
  {
    path:'ropa',
    component: RopaComponent
  },
  {
    path:'ropa/:nombre',
    component: RopaComponent
  },
 
  {
    path:'disfraces',
    component: DisfracesComponent
  },
  {
    path:'disfraces/:nombre',
    component: DisfracesComponent
  },


  { 
    path :'**' , redirectTo: 'inicio' , pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

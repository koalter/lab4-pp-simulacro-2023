import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { PeliculasModule } from '../peliculas/peliculas.module';


@NgModule({
  declarations: [
    BusquedaComponent,
    DetallePeliculaComponent
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule,
    PeliculasModule
  ]
})
export class BusquedaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './shared/tabla-pelicula/tabla-pelicula.component';


@NgModule({
  declarations: [
    PeliculasComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule
  ],
  exports: [
    TablaPeliculaComponent
  ]
})
export class PeliculasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PeliculasComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    SharedModule
  ]
})
export class PeliculasModule { }

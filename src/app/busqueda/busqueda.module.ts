import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';
import { SharedModule } from '../shared/shared.module';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';


@NgModule({
  declarations: [
    BusquedaComponent,
    DetallePeliculaComponent
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule,
    SharedModule
  ]
})
export class BusquedaModule { }

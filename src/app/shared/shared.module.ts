import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPeliculaComponent } from './tabla-pelicula/tabla-pelicula.component';



@NgModule({
  declarations: [
    TablaPeliculaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TablaPeliculaComponent
  ]
})
export class SharedModule { }

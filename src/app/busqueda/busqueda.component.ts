import { Component } from '@angular/core';
import { Peliculas } from '../models/peliculas';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent {
  modoGrilla: boolean = true;
  peliculaSeleccionada?: Peliculas

  cambiarVista() {
    this.modoGrilla = !this.modoGrilla;
  }

  seleccionarPelicula(peliculaSeleccionada: Peliculas) {
    this.peliculaSeleccionada = peliculaSeleccionada;
  }
}

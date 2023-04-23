import { Component, Input } from '@angular/core';
import { Peliculas } from 'src/app/models/peliculas';

@Component({
  selector: 'detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent {
  @Input() pelicula?: Peliculas;
}

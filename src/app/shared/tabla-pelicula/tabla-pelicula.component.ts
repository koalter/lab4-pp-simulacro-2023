import { Component, EventEmitter, Output } from '@angular/core';
import { Peliculas, Tipo } from 'src/app/models/peliculas';

@Component({
  selector: 'tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent {
  @Output() peliculaSeleccionada = new EventEmitter<Peliculas>();
  peliculas = [
    {
      "id": 1,
      "nombre": "Unconditional Love",
      "tipo": Tipo.amor,
      "fechaDeEstreno": new Date(2020, 5, 22),
      "cantidadPublico": 87,
      "foto": "http://dummyimage.com/250x250.png/ff4444/ffffff"
    }, 
    {
      "id": 2,
      "nombre": "Buried",
      "tipo": Tipo.terror,
      "fechaDeEstreno": new Date(2020, 7, 8),
      "cantidadPublico": 33,
      "foto": "http://dummyimage.com/250x250.png/cc0000/ffffff"
    }, 
    {
      "id": 3,
      "nombre": "Ted",
      "tipo": Tipo.comedia,
      "fechaDeEstreno": new Date(2022, 8, 15),
      "cantidadPublico": 58,
      "foto": "http://dummyimage.com/250x250.png/dddddd/000000"
    }, 
    {
      "id": 4,
      "nombre": "Al-risâlah",
      "tipo": Tipo.otros,
      "fechaDeEstreno": new Date(2020, 11, 12),
      "cantidadPublico": 63,
      "foto": "http://dummyimage.com/250x250.png/ff4444/ffffff"
    }
  ];

  seleccionarPelicula(index: number) {
    this.peliculaSeleccionada.emit(this.peliculas[index]);
  }
}

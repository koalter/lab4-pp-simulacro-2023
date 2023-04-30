import { Component } from '@angular/core';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent {
  paisSeleccionado: string = '';
  
  seleccionarPais(e: any) {
    this.paisSeleccionado = e.nombre;
  }
}

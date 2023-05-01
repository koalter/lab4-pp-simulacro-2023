import { Component, Input } from '@angular/core';
import { ActorService } from '../shared/actor.service';
import { Actor } from '../shared/actor.model';

@Component({
  selector: 'actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.scss']
})
export class ActorFormComponent {
  @Input() pais!: string;
  nombre: string = '';
  apellido: string = '';
  fechaNacimiento!: Date;

  constructor(private actorService: ActorService) { }

  submit() {
    if (!this.validar()) {
      console.log(this.nombre, this.apellido, this.fechaNacimiento, this.pais);
      return;
    }
    const actor = new Actor(this.nombre, this.apellido, this.fechaNacimiento, this.pais);
    this.actorService.guardar(actor)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  validar(): boolean {
    return this.nombre !== ''
        && this.apellido !== ''
        && this.fechaNacimiento
        && this.pais !== '';
  }
}

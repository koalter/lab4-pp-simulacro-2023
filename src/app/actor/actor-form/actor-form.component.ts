import { Component, Input } from '@angular/core';

@Component({
  selector: 'actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.scss']
})
export class ActorFormComponent {
  @Input() pais?: string;
}

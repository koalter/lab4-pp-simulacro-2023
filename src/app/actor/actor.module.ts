import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActorComponent } from './actor.component';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';


@NgModule({
  declarations: [
    ActorComponent,
    ActorAltaComponent,
    ActorListadoComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule
  ]
})
export class ActorModule { }

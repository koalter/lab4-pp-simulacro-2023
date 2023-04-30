import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActorComponent } from './actor.component';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { PaisesModule } from '../paises/paises.module';


@NgModule({
  declarations: [
    ActorComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    ActorFormComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    PaisesModule
  ]
})
export class ActorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPaisesComponent } from './shared/tabla-paises/tabla-paises.component';



@NgModule({
  declarations: [
    TablaPaisesComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TablaPaisesComponent
  ]
})
export class PaisesModule { }

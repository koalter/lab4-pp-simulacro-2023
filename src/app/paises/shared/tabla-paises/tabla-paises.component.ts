import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { PaisesService } from '../paises.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit, OnDestroy {

  @Output() select: EventEmitter<any> = new EventEmitter();
  suscripcion!: Subscription;
  paises: any[] = [];

  constructor(private paisesService: PaisesService) {}
  
  ngOnInit(): void {
    this.suscripcion = this.paisesService.traerPaises()
      .subscribe(arr => {
        for (let i = 0; i < 10; i++) {
          this.paises.push({ nombre: arr[i]["name"]["common"], bandera: arr[i]["flags"]["svg"] });
        }
      });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  seleccionarPais(pais: any) {
    this.select.emit(pais);
  }
}

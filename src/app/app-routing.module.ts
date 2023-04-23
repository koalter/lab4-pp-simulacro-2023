import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'peliculas',
    loadChildren: () =>
      import('./peliculas/peliculas.module').then((m) => m.PeliculasModule),
  },
  {
    path: 'actor',
    loadChildren: () =>
      import('./actor/actor.module').then((m) => m.ActorModule),
  },
  {
    path: 'busqueda',
    loadChildren: () =>
      import('./busqueda/busqueda.module').then((m) => m.BusquedaModule),
  },
  {
    path: 'bienvenido',
    loadChildren: () =>
      import('./bienvenido/bienvenido.module').then((m) => m.BienvenidoModule),
  },
  {
    path: '',
    redirectTo: 'bienvenido',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

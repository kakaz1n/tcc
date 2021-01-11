import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaExerciciosPage } from './lista-exercicios.page';

const routes: Routes = [
  {
    path: '',
    component: ListaExerciciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExerciciosPageRoutingModule {}

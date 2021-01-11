import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercicioPage } from './exercicio.page';

const routes: Routes = [
  {
    path: '',
    component: ExercicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercicioPageRoutingModule {}

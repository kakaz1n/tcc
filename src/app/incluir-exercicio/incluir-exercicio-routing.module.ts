import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncluirExercicioPage } from './incluir-exercicio.page';

const routes: Routes = [
  {
    path: '',
    component: IncluirExercicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncluirExercicioPageRoutingModule {}

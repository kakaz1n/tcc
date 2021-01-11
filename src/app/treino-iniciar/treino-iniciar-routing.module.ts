import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreinoIniciarPage } from './treino-iniciar.page';

const routes: Routes = [
  {
    path: '',
    component: TreinoIniciarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreinoIniciarPageRoutingModule {}

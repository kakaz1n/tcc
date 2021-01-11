import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreinoRealizadoPage } from './treino-realizado.page';

const routes: Routes = [
  {
    path: '',
    component: TreinoRealizadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreinoRealizadoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreinosRealizadosPage } from './treinos-realizados.page';

const routes: Routes = [
  {
    path: '',
    component: TreinosRealizadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreinosRealizadosPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadoHistoricoPage } from './estado-historico.page';

const routes: Routes = [
  {
    path: '',
    component: EstadoHistoricoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoHistoricoPageRoutingModule {}

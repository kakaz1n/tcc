import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrientacoesGeraisPage } from './orientacoes-gerais.page';

const routes: Routes = [
  {
    path: '',
    component: OrientacoesGeraisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrientacoesGeraisPageRoutingModule {}

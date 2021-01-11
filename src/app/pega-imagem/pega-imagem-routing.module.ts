import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PegaImagemPage } from './pega-imagem.page';

const routes: Routes = [
  {
    path: '',
    component: PegaImagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PegaImagemPageRoutingModule {}

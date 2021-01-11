import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuscoesqueleticoRegistroPage } from './muscoesqueletico-registro.page';

const routes: Routes = [
  {
    path: '',
    component: MuscoesqueleticoRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuscoesqueleticoRegistroPageRoutingModule {}

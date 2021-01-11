import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuscoesqueleticoIntroducaoPage } from './muscoesqueletico-introducao.page';

const routes: Routes = [
  {
    path: '',
    component: MuscoesqueleticoIntroducaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuscoesqueleticoIntroducaoPageRoutingModule {}

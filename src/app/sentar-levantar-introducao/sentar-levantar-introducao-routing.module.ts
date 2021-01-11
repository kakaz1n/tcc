import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentarLevantarIntroducaoPage } from './sentar-levantar-introducao.page';

const routes: Routes = [
  {
    path: '',
    component: SentarLevantarIntroducaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SentarLevantarIntroducaoPageRoutingModule {}

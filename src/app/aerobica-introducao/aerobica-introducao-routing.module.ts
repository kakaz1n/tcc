import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AerobicaIntroducaoPage } from './aerobica-introducao.page';

const routes: Routes = [
  {
    path: '',
    component: AerobicaIntroducaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AerobicaIntroducaoPageRoutingModule {}

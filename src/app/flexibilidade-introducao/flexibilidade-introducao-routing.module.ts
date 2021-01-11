import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlexibilidadeIntroducaoPage } from './flexibilidade-introducao.page';

const routes: Routes = [
  {
    path: '',
    component: FlexibilidadeIntroducaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlexibilidadeIntroducaoPageRoutingModule {}

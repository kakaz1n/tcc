import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionalIntroducaoPage } from './funcional-introducao.page';

const routes: Routes = [
  {
    path: '',
    component: FuncionalIntroducaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionalIntroducaoPageRoutingModule {}

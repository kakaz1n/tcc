import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeitosTreinosPage } from './feitos-treinos.page';

const routes: Routes = [
  {
    path: '',
    component: FeitosTreinosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeitosTreinosPageRoutingModule {}

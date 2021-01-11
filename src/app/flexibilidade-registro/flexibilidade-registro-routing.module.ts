import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlexibilidadeRegistroPage } from './flexibilidade-registro.page';

const routes: Routes = [
  {
    path: '',
    component: FlexibilidadeRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlexibilidadeRegistroPageRoutingModule {}

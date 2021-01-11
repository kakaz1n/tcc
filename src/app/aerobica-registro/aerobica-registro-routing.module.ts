import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AerobicaRegistroPage } from './aerobica-registro.page';

const routes: Routes = [
  {
    path: '',
    component: AerobicaRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AerobicaRegistroPageRoutingModule {}

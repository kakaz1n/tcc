import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinaisSintomasPage } from './sinais-sintomas.page';

const routes: Routes = [
  {
    path: '',
    component: SinaisSintomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinaisSintomasPageRoutingModule {}

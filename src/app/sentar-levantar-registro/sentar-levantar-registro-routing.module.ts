import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentarLevantarRegistroPage } from './sentar-levantar-registro.page';

const routes: Routes = [
  {
    path: '',
    component: SentarLevantarRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SentarLevantarRegistroPageRoutingModule {}

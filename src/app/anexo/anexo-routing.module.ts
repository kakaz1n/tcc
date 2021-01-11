import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnexoPage } from './anexo.page';

const routes: Routes = [
  {
    path: '',
    component: AnexoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnexoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirDescerRegistroPage } from './subir-descer-registro.page';

const routes: Routes = [
  {
    path: '',
    component: SubirDescerRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubirDescerRegistroPageRoutingModule {}

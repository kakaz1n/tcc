import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntropometriaRegistroPage } from './antropometria-registro.page';

const routes: Routes = [
  {
    path: '',
    component: AntropometriaRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntropometriaRegistroPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntropometriaIntroducaoPage } from './antropometria-introducao.page';

const routes: Routes = [
  {
    path: '',
    component: AntropometriaIntroducaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntropometriaIntroducaoPageRoutingModule {}

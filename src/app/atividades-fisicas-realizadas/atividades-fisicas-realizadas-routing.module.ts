import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtividadesFisicasRealizadasPage } from './atividades-fisicas-realizadas.page';

const routes: Routes = [
  {
    path: '',
    component: AtividadesFisicasRealizadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtividadesFisicasRealizadasPageRoutingModule {}

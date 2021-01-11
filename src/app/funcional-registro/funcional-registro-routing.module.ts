import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionalRegistroPage } from './funcional-registro.page';

const routes: Routes = [
  {
    path: '',
    component: FuncionalRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionalRegistroPageRoutingModule {}

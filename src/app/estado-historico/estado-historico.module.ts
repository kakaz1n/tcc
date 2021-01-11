import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadoHistoricoPageRoutingModule } from './estado-historico-routing.module';

import { EstadoHistoricoPage } from './estado-historico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadoHistoricoPageRoutingModule
  ],
  declarations: [EstadoHistoricoPage]
})
export class EstadoHistoricoPageModule {}

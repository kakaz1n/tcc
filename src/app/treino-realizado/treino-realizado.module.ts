import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreinoRealizadoPageRoutingModule } from './treino-realizado-routing.module';

import { TreinoRealizadoPage } from './treino-realizado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreinoRealizadoPageRoutingModule
  ],
  declarations: [TreinoRealizadoPage]
})
export class TreinoRealizadoPageModule {}

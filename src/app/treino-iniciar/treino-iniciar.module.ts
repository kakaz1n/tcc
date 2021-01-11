import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreinoIniciarPageRoutingModule } from './treino-iniciar-routing.module';

import { TreinoIniciarPage } from './treino-iniciar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreinoIniciarPageRoutingModule
  ],
  declarations: [TreinoIniciarPage]
})
export class TreinoIniciarPageModule {}

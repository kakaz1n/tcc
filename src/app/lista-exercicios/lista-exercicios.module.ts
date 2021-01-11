import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaExerciciosPageRoutingModule } from './lista-exercicios-routing.module';

import { ListaExerciciosPage } from './lista-exercicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaExerciciosPageRoutingModule
  ],
  declarations: [ListaExerciciosPage]
})
export class ListaExerciciosPageModule {}

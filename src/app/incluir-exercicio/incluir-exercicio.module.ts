import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncluirExercicioPageRoutingModule } from './incluir-exercicio-routing.module';

import { IncluirExercicioPage } from './incluir-exercicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncluirExercicioPageRoutingModule
  ],
  declarations: [IncluirExercicioPage]
})
export class IncluirExercicioPageModule {}

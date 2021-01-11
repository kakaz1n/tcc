import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercicioPageRoutingModule } from './exercicio-routing.module';

import { ExercicioPage } from './exercicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExercicioPageRoutingModule
  ],
  declarations: [ExercicioPage]
})
export class ExercicioPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtividadesFisicasRealizadasPageRoutingModule } from './atividades-fisicas-realizadas-routing.module';

import { AtividadesFisicasRealizadasPage } from './atividades-fisicas-realizadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtividadesFisicasRealizadasPageRoutingModule
  ],
  declarations: [AtividadesFisicasRealizadasPage]
})
export class AtividadesFisicasRealizadasPageModule {}

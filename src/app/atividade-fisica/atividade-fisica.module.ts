import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtividadeFisicaPageRoutingModule } from './atividade-fisica-routing.module';

import { AtividadeFisicaPage } from './atividade-fisica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtividadeFisicaPageRoutingModule
  ],
  declarations: [AtividadeFisicaPage]
})
export class AtividadeFisicaPageModule {}

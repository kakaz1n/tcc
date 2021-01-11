import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrientacoesGeraisPageRoutingModule } from './orientacoes-gerais-routing.module';

import { OrientacoesGeraisPage } from './orientacoes-gerais.page';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrientacoesGeraisPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OrientacoesGeraisPage]
})
export class OrientacoesGeraisPageModule {}

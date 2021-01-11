import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuscoesqueleticoIntroducaoPageRoutingModule } from './muscoesqueletico-introducao-routing.module';

import { MuscoesqueleticoIntroducaoPage } from './muscoesqueletico-introducao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuscoesqueleticoIntroducaoPageRoutingModule
  ],
  declarations: [MuscoesqueleticoIntroducaoPage]
})
export class MuscoesqueleticoIntroducaoPageModule {}

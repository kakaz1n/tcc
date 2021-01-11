import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SentarLevantarIntroducaoPageRoutingModule } from './sentar-levantar-introducao-routing.module';

import { SentarLevantarIntroducaoPage } from './sentar-levantar-introducao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SentarLevantarIntroducaoPageRoutingModule
  ],
  declarations: [SentarLevantarIntroducaoPage]
})
export class SentarLevantarIntroducaoPageModule {}

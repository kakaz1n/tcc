import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AerobicaIntroducaoPageRoutingModule } from './aerobica-introducao-routing.module';

import { AerobicaIntroducaoPage } from './aerobica-introducao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AerobicaIntroducaoPageRoutingModule
  ],
  declarations: [AerobicaIntroducaoPage]
})
export class AerobicaIntroducaoPageModule {}

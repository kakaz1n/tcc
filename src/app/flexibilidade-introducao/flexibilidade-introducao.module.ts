import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlexibilidadeIntroducaoPageRoutingModule } from './flexibilidade-introducao-routing.module';

import { FlexibilidadeIntroducaoPage } from './flexibilidade-introducao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexibilidadeIntroducaoPageRoutingModule
  ],
  declarations: [FlexibilidadeIntroducaoPage]
})
export class FlexibilidadeIntroducaoPageModule {}

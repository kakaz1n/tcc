import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionalIntroducaoPageRoutingModule } from './funcional-introducao-routing.module';

import { FuncionalIntroducaoPage } from './funcional-introducao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionalIntroducaoPageRoutingModule
  ],
  declarations: [FuncionalIntroducaoPage]
})
export class FuncionalIntroducaoPageModule {}

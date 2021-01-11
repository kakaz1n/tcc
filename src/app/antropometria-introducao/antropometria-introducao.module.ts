import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntropometriaIntroducaoPageRoutingModule } from './antropometria-introducao-routing.module';

import { AntropometriaIntroducaoPage } from './antropometria-introducao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntropometriaIntroducaoPageRoutingModule
  ],
  declarations: [AntropometriaIntroducaoPage]
})
export class AntropometriaIntroducaoPageModule {}

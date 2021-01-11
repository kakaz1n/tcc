import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeitosTreinosPageRoutingModule } from './feitos-treinos-routing.module';

import { FeitosTreinosPage } from './feitos-treinos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeitosTreinosPageRoutingModule
  ],
  declarations: [FeitosTreinosPage]
})
export class FeitosTreinosPageModule {}

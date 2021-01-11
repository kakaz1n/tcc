import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PegaImagemPageRoutingModule } from './pega-imagem-routing.module';

import { PegaImagemPage } from './pega-imagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PegaImagemPageRoutingModule
  ],
  declarations: [PegaImagemPage]
})
export class PegaImagemPageModule {}

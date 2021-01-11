import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnexoPageRoutingModule } from './anexo-routing.module';

import { AnexoPage } from './anexo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnexoPageRoutingModule
  ],
  declarations: [AnexoPage]
})
export class AnexoPageModule {}

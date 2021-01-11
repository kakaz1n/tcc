import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubirDescerPageRoutingModule } from './subir-descer-routing.module';

import { SubirDescerPage } from './subir-descer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubirDescerPageRoutingModule
  ],
  declarations: [SubirDescerPage]
})
export class SubirDescerPageModule {}

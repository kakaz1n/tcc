import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinaisSintomasPageRoutingModule } from './sinais-sintomas-routing.module';

import { SinaisSintomasPage } from './sinais-sintomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinaisSintomasPageRoutingModule
  ],
  declarations: [SinaisSintomasPage]
})
export class SinaisSintomasPageModule {}

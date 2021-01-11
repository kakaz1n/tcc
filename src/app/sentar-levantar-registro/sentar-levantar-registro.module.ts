import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SentarLevantarRegistroPageRoutingModule } from './sentar-levantar-registro-routing.module';

import { SentarLevantarRegistroPage } from './sentar-levantar-registro.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SentarLevantarRegistroPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [SentarLevantarRegistroPage]
})
export class SentarLevantarRegistroPageModule {}

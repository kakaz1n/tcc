import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntropometriaRegistroPageRoutingModule } from './antropometria-registro-routing.module';

import { AntropometriaRegistroPage } from './antropometria-registro.page';
import { BrMaskerModule } from 'br-mask';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntropometriaRegistroPageRoutingModule,
    ReactiveFormsModule,BrMaskerModule
  ],
  declarations: [AntropometriaRegistroPage]
})
export class AntropometriaRegistroPageModule {}

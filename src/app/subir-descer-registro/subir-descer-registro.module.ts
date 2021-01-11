import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubirDescerRegistroPageRoutingModule } from './subir-descer-registro-routing.module';

import { SubirDescerRegistroPage } from './subir-descer-registro.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubirDescerRegistroPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [SubirDescerRegistroPage]
})
export class SubirDescerRegistroPageModule {}

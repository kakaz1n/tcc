import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AerobicaRegistroPageRoutingModule } from './aerobica-registro-routing.module';

import { AerobicaRegistroPage } from './aerobica-registro.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AerobicaRegistroPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [AerobicaRegistroPage]
})
export class AerobicaRegistroPageModule {}

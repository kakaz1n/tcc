import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlexibilidadeRegistroPageRoutingModule } from './flexibilidade-registro-routing.module';

import { FlexibilidadeRegistroPage } from './flexibilidade-registro.page';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexibilidadeRegistroPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [FlexibilidadeRegistroPage]
})
export class FlexibilidadeRegistroPageModule {}

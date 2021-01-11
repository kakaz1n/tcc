import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreQuestionarioPageRoutingModule } from './pre-questionario-routing.module';

import { PreQuestionarioPage } from './pre-questionario.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreQuestionarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PreQuestionarioPage]
})
export class PreQuestionarioPageModule {}

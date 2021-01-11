import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuscoesqueleticoRegistroPageRoutingModule } from './muscoesqueletico-registro-routing.module';

import { MuscoesqueleticoRegistroPage } from './muscoesqueletico-registro.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuscoesqueleticoRegistroPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [MuscoesqueleticoRegistroPage]
})
export class MuscoesqueleticoRegistroPageModule {}

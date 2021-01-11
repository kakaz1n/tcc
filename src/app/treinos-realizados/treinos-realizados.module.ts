import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreinosRealizadosPageRoutingModule } from './treinos-realizados-routing.module';

import { TreinosRealizadosPage } from './treinos-realizados.page';
import { CalendarModule } from 'ion2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreinosRealizadosPageRoutingModule,
    CalendarModule
  ],
  declarations: [TreinosRealizadosPage]
})
export class TreinosRealizadosPageModule {}

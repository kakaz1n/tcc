import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionalRegistroPageRoutingModule } from './funcional-registro-routing.module';

import { FuncionalRegistroPage } from './funcional-registro.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionalRegistroPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [FuncionalRegistroPage]
})
export class FuncionalRegistroPageModule {}

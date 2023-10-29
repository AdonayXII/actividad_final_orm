import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdMineralPageRoutingModule } from './upd-mineral-routing.module';

import { UpdMineralPage } from './upd-mineral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdMineralPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdMineralPage]
})
export class UpdMineralPageModule {}

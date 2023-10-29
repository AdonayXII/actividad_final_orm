import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMineralPageRoutingModule } from './add-mineral-routing.module';

import { AddMineralPage } from './add-mineral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMineralPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddMineralPage]
})
export class AddMineralPageModule {}

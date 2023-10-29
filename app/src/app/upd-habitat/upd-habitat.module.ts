import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdHabitatPageRoutingModule } from './upd-habitat-routing.module';

import { UpdHabitatPage } from './upd-habitat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdHabitatPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdHabitatPage]
})
export class UpdHabitatPageModule {}

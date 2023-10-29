import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddHabitatPageRoutingModule } from './add-habitat-routing.module';

import { AddHabitatPage } from './add-habitat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddHabitatPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddHabitatPage]
})
export class AddHabitatPageModule {}

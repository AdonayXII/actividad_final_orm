import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListHabitatsPageRoutingModule } from './list-habitats-routing.module';

import { ListHabitatsPage } from './list-habitats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListHabitatsPageRoutingModule
  ],
  declarations: [ListHabitatsPage]
})
export class ListHabitatsPageModule {}

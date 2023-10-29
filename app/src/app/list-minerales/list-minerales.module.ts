import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMineralesPageRoutingModule } from './list-minerales-routing.module';

import { ListMineralesPage } from './list-minerales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMineralesPageRoutingModule
  ],
  declarations: [ListMineralesPage]
})
export class ListMineralesPageModule {}

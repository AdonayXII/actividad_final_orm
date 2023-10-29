import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdHabitatPage } from './upd-habitat.page';

const routes: Routes = [
  {
    path: '',
    component: UpdHabitatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdHabitatPageRoutingModule {}

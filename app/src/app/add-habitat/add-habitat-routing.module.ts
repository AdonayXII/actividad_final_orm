import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddHabitatPage } from './add-habitat.page';

const routes: Routes = [
  {
    path: '',
    component: AddHabitatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddHabitatPageRoutingModule {}

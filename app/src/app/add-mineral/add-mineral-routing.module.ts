import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMineralPage } from './add-mineral.page';

const routes: Routes = [
  {
    path: '',
    component: AddMineralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMineralPageRoutingModule {}

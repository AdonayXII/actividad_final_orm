import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdMineralPage } from './upd-mineral.page';

const routes: Routes = [
  {
    path: '',
    component: UpdMineralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdMineralPageRoutingModule {}

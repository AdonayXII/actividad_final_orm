import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdMonsterPage } from './upd-monster.page';

const routes: Routes = [
  {
    path: '',
    component: UpdMonsterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdMonsterPageRoutingModule {}

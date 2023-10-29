import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMineralesPage } from './list-minerales.page';

const routes: Routes = [
  {
    path: '',
    component: ListMineralesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMineralesPageRoutingModule {}

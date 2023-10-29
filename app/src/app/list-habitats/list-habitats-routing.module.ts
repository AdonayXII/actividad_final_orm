import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListHabitatsPage } from './list-habitats.page';

const routes: Routes = [
  {
    path: '',
    component: ListHabitatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListHabitatsPageRoutingModule {}

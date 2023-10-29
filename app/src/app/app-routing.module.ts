import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-monster',
    loadChildren: () => import('./add-monster/add-monster.module').then(m => m.AddMonsterPageModule)
  },
  {
    path: 'list-monsters',
    loadChildren: () => import('./list-monsters/list-monsters.module').then(m => m.ListMonstersPageModule)
  },
  {
    path: 'upd-monster/:id',
    loadChildren: () => import('./upd-monster/upd-monster.module').then(m => m.UpdMonsterPageModule)
  },
  {
    path: 'upd-mineral/:id',
    loadChildren: () => import('./upd-mineral/upd-mineral.module').then(m => m.UpdMineralPageModule)
  },
  {
    path: 'add-mineral',
    loadChildren: () => import('./add-mineral/add-mineral.module').then(m => m.AddMineralPageModule)
  },
  {
    path: 'list-minerales',
    loadChildren: () => import('./list-minerales/list-minerales.module').then(m => m.ListMineralesPageModule)
  },
  {
    path: 'add-habitat',
    loadChildren: () => import('./add-habitat/add-habitat.module').then(m => m.AddHabitatPageModule)
  },
  {
    path: 'upd-habitat/:id',
    loadChildren: () => import('./upd-habitat/upd-habitat.module').then(m => m.UpdHabitatPageModule)
  },
  {
    path: 'list-habitats',
    loadChildren: () => import('./list-habitats/list-habitats.module').then(m => m.ListHabitatsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

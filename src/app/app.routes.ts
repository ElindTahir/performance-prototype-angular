import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },

  {
    path: 'list',
    loadChildren: () =>
      import('./features/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./features/detail/detail.module').then((m) => m.DetailModule),
  },
];

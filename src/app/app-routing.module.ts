import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LH_ROUTES } from './core/configurations/router.config';

const routes: Routes = [
  {
    path: LH_ROUTES.dashboard,
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((module) => module.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

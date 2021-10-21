import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LH_ROUTES } from './core/configurations/router.config';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: LH_ROUTES.dashboard,
  },
  {
    path: LH_ROUTES.dashboard,
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((module) => module.DashboardModule),
  },
  {
    path: LH_ROUTES.notFound,
    loadChildren: () => import('./pages/not-found/not-found.module').then((module) => module.NotFoundModule),
  },
  {
    path: LH_ROUTES.forbidden,
    loadChildren: () => import('./pages/forbidden/forbidden.module').then((module) => module.ForbiddenModule),
  },
  {
    path: '**',
    redirectTo: LH_ROUTES.notFound,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

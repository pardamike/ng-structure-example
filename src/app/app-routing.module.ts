import { GuestComponent } from './shared/layouts/guest/guest.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './shared/layouts/auth/auth.component';

const routes: Routes = [
  /**
   * Auth routes:
   */
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
      },
    ]
  },
  /**
   * Unauth routes:
   */
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'guest',
        loadChildren: './modules/guest/guest.module#GuestModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

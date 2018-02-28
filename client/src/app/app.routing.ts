import { Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: '',
    loadChildren: './components/dashboard/dashboard.module#DashboardModule'
  }
]
}];

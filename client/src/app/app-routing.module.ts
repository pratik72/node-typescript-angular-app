import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Title } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { InvoiceComponent } from './custom-apps/invoice/invoice.component';
import { PurchaseOrderComponent } from './custom-apps/purchase-order/purchase-order.component';
import { SupplierComponent } from './custom-apps/supplier/supplier.component';
import { FinanceComponent } from './custom-apps/finance/finance.component';
import { ReportsComponent } from './reports/reports.component';
import { TrackPaymentsComponent } from './track-payments/track-payments.component';

import { AdminComponent } from './admin-app/admin/admin.component';
import { UsersComponent } from './admin-app/users/users.component';
import { OrganizationsComponent } from './admin-app/organizations/organizations.component';
import { RolesComponent } from './admin-app/roles/roles.component';
import { LocationsComponent } from './admin-app/locations/locations.component';
import { DepartmentsComponent } from './admin-app/departments/departments.component';
import { GroupsComponent } from './admin-app/groups/groups.component';

export const AppRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: 'purchase-order',
        component: PurchaseOrderComponent
      },
      {
        path: 'supplier',
        component: SupplierComponent
      },
      {
        path: 'finance',
        component: FinanceComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'track-payments',
        component: TrackPaymentsComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path : 'admin',
    component : AdminComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'groups',
        component: GroupsComponent
      },
      {
        path: 'organizations',
        component: OrganizationsComponent
      },
      {
        path: 'roles',
        component: RolesComponent
      },
      {
        path: 'departments',
        component: DepartmentsComponent
      },
      {
        path: 'locations',
        component: LocationsComponent
      }
    ]
  },
  {
    path: '',
    component: LoginComponent
  }
];
// export class AppRoutingModule { }
export const ROUTING: ModuleWithProviders = RouterModule.forRoot( AppRoutes );

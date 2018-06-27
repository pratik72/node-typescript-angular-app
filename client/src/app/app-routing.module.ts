import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { DashboardComponent }  from './dashboard/dashboard.component';
import { LoginComponent }    from './login/login.component';
import { InvoiceComponent }    from './invoice/invoice.component';
import { PurchaseOrderComponent }    from './purchase-order/purchase-order.component';
import { SupplierComponent }    from './supplier/supplier.component';
import { FinanceComponent }    from './finance/finance.component';
import { ReportsComponent }    from './reports/reports.component';
import { TrackPaymentsComponent }    from './track-payments/track-payments.component';

import { AdminComponent }    from './admin/admin.component';
import { AdmUsersComponent }    from './adm-users/adm-users.component';
import { AdmOrganizationsComponent }    from './adm-organizations/adm-organizations.component';
import { AdmRolesComponent }    from './adm-roles/adm-roles.component';
import { AdmLocationsComponent }    from './adm-locations/adm-locations.component';
import { AdmDepartmentsComponent }    from './adm-departments/adm-departments.component';


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
        path:'purchase-order',
        component:PurchaseOrderComponent
      },
      {
        path:'supplier',
        component:SupplierComponent
      },
      {
        path:'finance',
        component:FinanceComponent
      },
      {
        path:'reports',
        component:ReportsComponent
      },
      {
        path:'track-payments',
        component:TrackPaymentsComponent
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
        component: AdmUsersComponent
      },
      {
        path:'organizations',
        component: AdmOrganizationsComponent
      },
      {
        path:'roles',
        component: AdmRolesComponent
      },
      {
        path:'departments',
        component: AdmDepartmentsComponent
      },
      {
        path:'locations',
        component: AdmLocationsComponent
      }
    ]
  },
  {
    path: '',
    component: LoginComponent
  }
];
//export class AppRoutingModule { }
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
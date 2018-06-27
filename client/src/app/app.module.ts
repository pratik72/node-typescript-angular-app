import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ROUTING } from './app-routing.module'

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { SupplierComponent } from './supplier/supplier.component';
import { FinanceComponent } from './finance/finance.component';
import { ReportsComponent } from './reports/reports.component';
import { TrackPaymentsComponent } from './track-payments/track-payments.component';
import { AdminComponent } from './admin/admin.component';
import { AdmNavbarComponent } from './adm-navbar/adm-navbar.component';
import { AdmSidebarComponent } from './adm-sidebar/adm-sidebar.component';
import { AdmUsersComponent } from './adm-users/adm-users.component';
import { AdmOrganizationsComponent } from './adm-organizations/adm-organizations.component';
import { AdmLocationsComponent } from './adm-locations/adm-locations.component';
import { AdmDepartmentsComponent } from './adm-departments/adm-departments.component';
import { AdmRolesComponent } from './adm-roles/adm-roles.component';
import { AdmUserModalComponent } from './modals/adm-user-modal/adm-user-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    InvoiceComponent,
    PurchaseOrderComponent,
    SupplierComponent,
    FinanceComponent,
    ReportsComponent,
    TrackPaymentsComponent,
    AdminComponent,
    AdmNavbarComponent,
    AdmSidebarComponent,
    AdmUsersComponent,
    AdmOrganizationsComponent,
    AdmLocationsComponent,
    AdmDepartmentsComponent,
    AdmRolesComponent,
    AdmUserModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ROUTING,
    Ng2SmartTableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Third party lib
import { Ng2SmartTableModule } from 'ng2-smart-table';

// App route
import { ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';

// App services
import { CommonApiService } from './services/common-api/common-api.service';


// App component
import { LoginComponent } from './login/login.component';

// Component for User Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// Component for Custom Apps
import { InvoiceComponent } from './custom-apps/invoice/invoice.component';
import { PurchaseOrderComponent } from './custom-apps/purchase-order/purchase-order.component';
import { SupplierComponent } from './custom-apps/supplier/supplier.component';
import { FinanceComponent } from './custom-apps/finance/finance.component';
import { ReportsComponent } from './reports/reports.component';
import { TrackPaymentsComponent } from './track-payments/track-payments.component';

// Component for Admin apps
import { AdminComponent } from './admin-app/admin/admin.component';
import { AdmNavbarComponent } from './admin-app/adm-navbar/adm-navbar.component';
import { AdmSidebarComponent } from './admin-app/adm-sidebar/adm-sidebar.component';
import { OrganizationsComponent } from './admin-app/organizations/organizations.component';
import { UsersComponent } from './admin-app/users/users.component';
import { DepartmentsComponent } from './admin-app/departments/departments.component';
import { LocationsComponent } from './admin-app/locations/locations.component';
import { RolesComponent } from './admin-app/roles/roles.component';
import { GroupsComponent } from './admin-app/groups/groups.component';

// Components for Modal apps
import { UserModalComponent } from './modals/admin/user-modal/user-modal.component';
import { OrganizationModalComponent } from './modals/admin/organization-modal/organization-modal.component';


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
    UsersComponent,
    OrganizationsComponent,
    UsersComponent,
    DepartmentsComponent,
    LocationsComponent,
    RolesComponent,
    GroupsComponent,
    UserModalComponent,
    OrganizationModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ROUTING,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ CommonApiService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

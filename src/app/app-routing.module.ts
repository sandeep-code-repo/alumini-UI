import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegdetailsComponent } from './regdetails/regdetails.component';
import { AuthService } from './services/auth/auth.service';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { ApidocComponent } from './apidoc/apidoc.component';
import { EmployeeExcelComponent } from './employee-excel/employee-excel.component';
import { AdminEmpExcelComponent } from './admin-emp-excel/admin-emp-excel.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RealtimeReportComponent } from './realtime-report/realtime-report.component';
import { TrendsComponent } from './trends/trends.component';
import { ExcedenceReportComponent } from './excedence-report/excedence-report.component';
//import { SmsReportTableComponent } from './excedence-report/sms-report-table/sms-report-table.component';
import { SmsTableComponent } from './excedence-report/sms-table/sms-table.component';
import { AddworkflowComponent } from './addworkflow/addworkflow.component';
import { SiteStatusComponent } from './site-status/site-status.component';
import { WorkflowComponent } from './workflow/workflow.component';

// Parent Routes
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthService],

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'regdetails',
    component: RegdetailsComponent
  },

  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'add',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'forgetpassword',
    component: ForgetpasswordComponent
  },

  {
    path: 'empexcel',
    component: EmployeeExcelComponent
  },
  {
    path: 'apidoc',
    component: ApidocComponent
  },
  {
    path: 'Admin_emp_excel',
    component: AdminEmpExcelComponent

  }
  ,


  {
    path: 'dashboard',
    component: DashboardComponent

  },
  {
    path: 'realtime-report',
    component: RealtimeReportComponent
  },
  {
    path: 'trends',
    component: TrendsComponent
  },
  {
    path: 'excedence-report',
    component: ExcedenceReportComponent,
    children: [
      {
        path: 'smsDatatable', // child route path
        component: SmsTableComponent, // child route component that the router renders
      },
      // {
      //   path: 'child-b',
      //   component: ChildBComponent, // another child route component that the router renders
      // },
    ],
  },
  {
    path: 'site-status',
  component:SiteStatusComponent
  },
  // {
  //   path:'mapview',
  //   component:MapviewComponent
  // },
  {
    path:'workflow',
    component:WorkflowComponent
  },
  {
    path:'addworkflow',
    component:AddworkflowComponent
  }
  
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

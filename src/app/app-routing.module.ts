import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import{RegistrationComponent} from './registration/registration.component';
import{RegdetailsComponent} from './regdetails/regdetails.component';
import { AuthService } from './services/auth/auth.service';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { ApidocComponent } from './apidoc/apidoc.component';
import { EmployeeExcelComponent } from './employee-excel/employee-excel.component';
import { AdminEmpExcelComponent } from './admin-emp-excel/admin-emp-excel.component';
import{PasswordComponent} from './password/password.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import { from } from 'rxjs';
import{RealtimeReportComponent} from './realtime-report/realtime-report.component';
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
    path: 'password',
    component: PasswordComponent

  }
  ,
  {
    path: 'dashboard',
    component: DashboardComponent

  },
  {
    path:'realtime-report',
    component:RealtimeReportComponent
  }
  
];

@NgModule({
  imports: [RouterModule,RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

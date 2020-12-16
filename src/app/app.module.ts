import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// Modules
//import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
// Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { StudentService } from './services/student/student.service';



// Pipes
//import { FilterPipe } from './pipes/filter.pipe';
//import { PhonePipe } from './pipes/phone.pipe';

// Components
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent, } from './home/home.component';
//import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { RegdetailsComponent } from './regdetails/regdetails.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { PlantInfoComponent } from './plant-info/plant-info.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HelpComponent } from './help/help.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{MatNativeDateModule } from '@angular/material/core'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AlertComponent } from './alert/alert.component';
import { EmployeeExcelComponent } from './employee-excel/employee-excel.component';
import { ApidocComponent } from './apidoc/apidoc.component';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { AdminEmpExcelComponent } from './admin-emp-excel/admin-emp-excel.component';
import { PasswordComponent } from './password/password.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ChartsModule } from 'ng2-charts';
import { FilterParentPipe } from './pipes/filter-parent.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndustryDropDown } from './services/common/dropdown.service';
import { AppRoutingModule } from './app-routing.module';
import { RealtimeReportComponent } from './realtime-report/realtime-report.component';
import { TrendsComponent } from './trends/trends.component';
import { HeaderComponent } from './header/header.component';
import {ExcedenceReportComponent} from './excedence-report/excedence-report.component'
@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		RegistrationComponent,
		RegdetailsComponent,
		PlantInfoComponent,
		ForgetpasswordComponent,
		HelpComponent,
		AlertComponent,
		EmployeeExcelComponent,
		ApidocComponent,
		AdminEmpExcelComponent,
		PasswordComponent,
		FilterParentPipe,
		DashboardComponent,
		RealtimeReportComponent,
		TrendsComponent,
		HeaderComponent,
		ExcedenceReportComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatTableModule,
		MatSortModule,
		TooltipModule,
		NgbModule,
		MatPaginatorModule,
		PdfJsViewerModule,
		MatInputModule,
		MatFormFieldModule,
		MatCardModule,
		MatFormFieldModule, MatSelectModule,
		MatIconModule,
		MatDividerModule,
		MatButtonModule,
		ChartsModule,
		MatProgressSpinnerModule,
		CommonModule,
		MatDatepickerModule,
		MatNativeDateModule 
	],
	providers: [AuthService, UserService, StudentService, IndustryDropDown],
	bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }

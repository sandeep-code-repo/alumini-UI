import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { enableProdMode } from '@angular/core';
// Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';


// Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { StudentService } from './services/student/student.service';


// Pipes
//import { FilterPipe } from './pipes/filter.pipe';
//import { PhonePipe } from './pipes/phone.pipe';

// Components
import { AppComponent } from './index/app.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent, } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import{RegistrationComponent} from './registration/registration.component';
import { RegdetailsComponent } from './regdetails/regdetails.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { PlantInfoComponent } from './plant-info/plant-info.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HelpComponent } from './help/help.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


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
		
	
	],
	imports: [
		BrowserModule,
		RouterModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatTableModule,
		MatSortModule,
		TooltipModule,
		NgbModule,
		MatPaginatorModule
		
		
	],
	providers: [AuthService, UserService, StudentService],
	bootstrap: [AppComponent],
	
})

// enableProdMode();

export class AppModule { }

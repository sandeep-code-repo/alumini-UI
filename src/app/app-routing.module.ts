import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import{RegistrationComponent} from './registration/registration.component';
import{RegdetailsComponent} from './regdetails/regdetails.component';
import { AuthService } from './services/auth/auth.service';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';



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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

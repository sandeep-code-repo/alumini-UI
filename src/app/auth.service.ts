import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public router: Router) {}
  isLoggedIn(): boolean {

    if (!localStorage.isLogin) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
   
    //return false;
 
}

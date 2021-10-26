import { UserAuthService } from './user-auth.service';
import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public userAuthService: UserAuthService, public router: Router) { }

  canActivate(): boolean {
     if (!this.userAuthService.isAuthenticated()) {
        this.router.navigate(['login']);
        //console.log('canActive checked not isAuthenticated()');
      return false;
     }
     return true;
  }


}

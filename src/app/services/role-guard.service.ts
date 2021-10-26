import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  constructor(public userAuthService: UserAuthService, public router: Router) {}

  canActivate( route: ActivatedRouteSnapshot  ): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    // const token = localStorage.getItem('token') as string;
    // // decode the token to get its payload
    // const tokenPayload = decode(token);
    const currentrole = this.userAuthService.getCurrentRole();
    console.log(currentrole,'=',expectedRole);

    if (
      !this.userAuthService.isAuthenticated() ||
      //tokenPayload.role !== expectedRole
      currentrole !== expectedRole
    ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

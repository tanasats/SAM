import { Injectable } from '@angular/core';
import { JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private currentrole: string ='';

  constructor(public jwtHelper: JwtHelperService) { }

  public setRoles(roles: any) {
    localStorage.setItem('roles',JSON.stringify(roles));
  }

  public getRoles(): any {
    return JSON.parse(localStorage.getItem('roles') || '{}');
    //return JSON.parse(localStorage.getItem('roles')!);
  }

  public setCurrentRole(currentrole: string) {
    //localStorage.setItem('currentrole',currentrole);
    this.currentrole=currentrole;
  }

  public getCurrentRole(): string {
    return this.currentrole;
    //return localStorage.getItem('currentrole') as string;
    //return JSON.parse(localStorage.getItem('roles')!);
  }

  public setToken(accessToken: string){
    localStorage.setItem('access-token',accessToken);
  }

  public getToken(): string {
    return localStorage.getItem('access-token')||'';
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn(){
    return (this.getRoles()!={} && this.getToken()!='');
  }

  public setUserInfo(user:any){
    return localStorage.setItem('user',JSON.stringify(user));
  }

  public getUserFullname(){
    let user = JSON.parse(localStorage.getItem('user')||'{}');
    return user.fullname;
  }

  public isAuthenticated(): boolean {
    //const token = localStorage.getItem('access-token') as string;
    //console.log('token=',token);
    //console.log('token is expired=',this.jwtHelper.isTokenExpired(localStorage.getItem('access-token') as string))
    //const token = localStorage.getItem('access-token')!;
    return !this.jwtHelper.isTokenExpired(localStorage.getItem('access-token') as string);
  }

}

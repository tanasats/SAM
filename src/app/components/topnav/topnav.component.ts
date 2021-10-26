import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  public userfullname='';

  constructor(
    private userAuthService:UserAuthService
  ) { } 

  public isLoggedIn(){
    if(this.userAuthService.isLoggedIn()) this.userfullname=this.userAuthService.getUserFullname();
    return this.userAuthService.isLoggedIn();
  } 

  public LogOut(){
    this.userAuthService.clear();
  }

  ngOnInit(): void {
  }

}

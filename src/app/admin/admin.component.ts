import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public SidenavLinks = [
    { link: "/admin", name: "หน้าหลัก", icon: "home" },
    { link: "/admin/activity", name: "จัดการกิจกรรม", icon: "assignment" },
    { link: "/admin/setting", name: "ตั้งค่า", icon: "settings" },   
  ];
  constructor() { }

  ngOnInit(): void { 
  }

}

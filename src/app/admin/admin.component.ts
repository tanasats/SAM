import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public SidenavLinks = [
    { link: "/admin", name: "หน้าหลัก", icon: "home" },
    { link: "/admin/xxx", name: "การเช็คชื่อ", icon: "fingerprint" },
    { link: "/admin/xxx", name: "ลงทะเบียนกิจกรรม", icon: "assignment" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

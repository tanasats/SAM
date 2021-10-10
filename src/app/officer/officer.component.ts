import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {
  public SidenavLinks = [
    { link: "/officer", name: "หน้าหลัก", icon: "home" },
    { link: "/officer/xxx", name: "การเช็คชื่อ", icon: "fingerprint" },
    { link: "/officer/xxx", name: "ลงทะเบียนกิจกรรม", icon: "assignment" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

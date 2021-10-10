import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public sidenavLinks = [
    { link: "/student", name: "xหน้าหลัก", icon: "dashboard" },
    { link: "/student/checkpoint", name: "xการเช็คชื่อ", icon: "fingerprint" },
    { link: "/student/register", name: "xลงทะเบียนกิจกรรม", icon: "assignment" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

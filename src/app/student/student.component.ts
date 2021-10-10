import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public studentSidenavLinks = [
    { link: "/student", name: "หน้าหลัก", icon: "dashboard" },
    { link: "/student/checkpoint", name: "การเช็คชื่อ", icon: "fingerprint" },
    { link: "/student/register", name: "ลงทะเบียนกิจกรรม", icon: "assignment" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

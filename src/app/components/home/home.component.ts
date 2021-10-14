import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {
  ConfirmDialogModel,
  ConfirmDialogComponent,
} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //date: NgbDate = new NgbDate(1789, 7, 14); 
  //model: NgbDateStruct | undefined;
  //model: NgbDateStruct={year:0,month:0,day:0};
  model: any;

  public sidenavLinks = [
    { link: '/student', name: 'xหน้าหลัก', icon: 'dashboard' },
    { link: '/student/checkpoint', name: 'xการเช็คชื่อ', icon: 'fingerprint' },
    {
      link: '/student/register',
      name: 'xลงทะเบียนกิจกรรม',
      icon: 'assignment',
    },
  ];
  result: string = '';

  
  //date: { year: number; month: number; day: number} | undefined;;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  confirmDialog(): void {
    const message = `Are you sure you want to do this?`;
    const dialogData = new ConfirmDialogModel('Confirm Action', message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
    });
    dialogRef.afterClosed().subscribe((dialogResult) => {
      this.result = dialogResult;
    });
  }
}

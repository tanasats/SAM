import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

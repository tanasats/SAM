import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmDialogComponent,
  ConfirmDialogModel,
} from 'src/app/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  activitylist = [
    { id: 1, actcode: '1111', actname: 'xxxx' },
    { id: 2, actcode: '2222', actname: 'yyyy' },
  ];
  result: string = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  confirmDialog(): void {
    const message = 'ต้องการลบ xxxxx';
    const dialogData = new ConfirmDialogModel(
      'ยืนยันลบข้อมูล',
      message,
      'home'
    );
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      //maxWidth: '400px',
      width: '600px',
      data: dialogData,
    });
    dialogRef.afterClosed().subscribe((dialogResult) => {
      this.result = dialogResult;
    });
  }

  deleteItem(item: any) {
    //console.log(item);
    const message = 'ต้องการลบ ' + item.actcode+' '+ item.actname;
    const dialogData = new ConfirmDialogModel('ยืนยันลบข้อมูล', message,'home' );
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      //maxWidth: '400px',
      width: '500px',
      data: dialogData,
    });
    dialogRef.afterClosed().subscribe((dialogResult) => {
      //this.result = dialogResult;
      if (dialogResult) {
        console.log('ดำเนินการลบ ' + item.actcode);
      } else {
        console.log('ยกเลิกลบ ' + item.actcode);
      }
    });
  }
}

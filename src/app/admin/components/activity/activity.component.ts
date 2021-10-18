import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmDialogComponent,
  ConfirmDialogModel,
} from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { ActivityService } from 'src/app/services/activity.service';
import { NotificationService} from 'src/app/services/notification.service'


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  // activitylist = [
  //   { id: 1, actcode: '1111', actname: 'xxxx' },
  //   { id: 2, actcode: '2222', actname: 'yyyy' },
  // ];
  activitylist = [];
  result: string = '';

  constructor(private activityService:ActivityService, private notifyService : NotificationService, public dialog: MatDialog,) {}

  ngOnInit(): void {
    this.getallActivity();
  }

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

  getallActivity(){
    this.activityService.getall().subscribe(
      (res) => {
        console.log("activityService=>res: ",res);
        this.activitylist = res;
      },
      (err) => {
        console.log("activityService=>err: ",err)
      }  
    )
  }

  deleteItem(item: any) {
    //console.log(item);
    const message = 'กิจกรรม ' + item.actcode+' '+ item.actname;
    const dialogData = new ConfirmDialogModel('ยืนยันลบข้อมูล', message );
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      //maxWidth: '400px',
      width: '500px',
      data: dialogData,
    });
    dialogRef.afterClosed().subscribe((dialogResult) => { 
      //this.result = dialogResult;
      if (dialogResult) {
        console.log('ดำเนินการลบ ' + item.actcode);
        this.onDelete(item.id);
      } else {
        console.log('ยกเลิกลบ ' + item.actcode);
      }
    });
  }
  onDelete(id:any){
    this.activityService.delete(id).subscribe(
      (res) => {
        //console.log("activityService=>res: ",res);
        if(res.affectedRows==1){
          console.log("success !! delete id: ",id)
          this.notifyService.showInfo("ลบข้อมูลเรียบร้อย", "ดำเนินการ")
          this.getallActivity()
        }else{
          this.notifyService.showError("ไม่สามารถลบข้อมูลได้", "ผิดพลาด")
        }
      },
      (err) => {
        //console.log("activityService=>err: ",err)
        this.notifyService.showError("Error: "+err, "ผิดพลาด")
        console.log("delete error: ",err)
      }  
    )
  }
  


} //----class----
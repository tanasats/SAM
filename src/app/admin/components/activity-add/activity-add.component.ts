import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivityService } from 'src/app/services/activity.service';
import { NotificationService} from 'src/app/services/notification.service';
import { ToastService} from 'src/app/services/toast.service';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css'],
})
export class ActivityAddComponent implements OnInit {
  constructor(
    private activityService:ActivityService,
    private notifyService:NotificationService,
    private formBuilder: FormBuilder,
    private toastService:ToastService,
    ) { }

  formActivity = this.formBuilder.group({
    actcode: [null, [Validators.required]],
    actname: [null, [Validators.required]],
    actdetail: [null, [Validators.required]],
    actyear: [null, [Validators.required]],
    actterm: [null, [Validators.required]],
    actstartdate: [null, [Validators.required]],
    actenddate: [null, [Validators.required]],
    //faculty: new FormArray([]),
  });
  get fa() {
    return this.formActivity.controls;
  }

  faculty = [
    { id: 1, name: 'คณะมนุษยศาสตร์และสังคมศาสตร์', completed: false },
    { id: 2, name: 'คณะวิทยาศาสตร์', completed: false },
    { id: 3, name: 'คณะวิศวกรรมศาสตร์', completed: false },
    { id: 4, name: 'คณะพยาบาลศาสตร์', completed: false },
    { id: 5, name: 'คณะศึกษาศาสตร์', completed: false },
    { id: 6, name: 'คณะศิลปกรรมศาสตร์', completed: false },
    { id: 7, name: 'คณะเภสัชศาสตร์', completed: false },
    { id: 8, name: 'คณะเทคโนโลยี', completed: false },
    { id: 9, name: 'คณะการบัญชีและการจัดการ', completed: false },
    { id: 10, name: 'คณะการท่องเที่ยงและการโรงแรม', completed: false },
    { id: 11, name: 'คณะสถาปัตยกรรมศาสตร์ ผังเมืองและนฤมิตศิลป์', completed: false },
    { id: 12, name: 'คณะวิทยาการสารสนเทศ', completed: false },
    { id: 13, name: 'วิทยาลัยการเมืองการปกครอง', completed: false },
    { id: 14, name: 'คณะสาธารณสุขศาสตร์', completed: false },
    { id: 15, name: 'คณะแพทยศาสตร์', completed: false },
    { id: 16, name: 'คณะสิ่งแวดล้อมและทรัพยากรศาสตร์', completed: false },
    { id: 17, name: 'คณะสัตวแพทย์', completed: false },
  ];
  allComplete: boolean = false;
  updateAllComplete() {
    this.allComplete = this.faculty.every((t) => t.completed);
    console.log('updateAllComplete() return ', this.allComplete);
  }
  someComplete(): boolean {
    return (
      this.faculty.filter((t) => t.completed).length > 0 && !this.allComplete
    );
  }
  setAllfaculty(completed: boolean) {
    this.allComplete = completed;
    this.faculty.forEach((t) => (t.completed = completed));
  }

  onSubmit() {
    if (this.formActivity.valid) {
      
      console.log('Activity data :: ', this.formActivity.value);
      let data = this.formActivity.value;
      data.actstartdate = data.actstartdate.year+'-'+data.actstartdate.month+'-'+data.actstartdate.day+'T00:00:00';
      data.actenddate =  data.actenddate.year+'-'+data.actenddate.month+'-'+data.actenddate.day+'T00:00:00';
      this.activityService.insert(data).subscribe(
        (res) => {
          console.log(res);
          if (res.affectedRows) {
            console.log("insert success !!!!")
            //this.notifyService.showSuccess('เพิ่มข้อมูลสำเร็จ','ดำเนินการ')
            this.showSuccess();
            this.formActivity.reset();
          }
        },
        (err) => {
          console.log("insert error ",err)
          this.notifyService.showError(err,'ผิดพลาด')
          //console.log(err);
        }
      );

    }
  }

  ngOnInit(): void {
    this.formActivity

  }

  showSuccess() {
    this.toastService.show('I am a success toast', {
      classname: 'bg-success text-light',
      delay: 2000 ,
      autohide: true,
      //headertext: 'Toast Header'
    });
  }

  
}

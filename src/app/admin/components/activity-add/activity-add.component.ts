import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})
export class ActivityAddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  
  formActivity = this.formBuilder.group({
    actcode: [null, [Validators.required]],
    actname: [null, [Validators.required]],
    actdetail: [null,[Validators.required]],
    actyear:[null,[Validators.required]],
    actterm:['',[Validators.required]],
    actstartdate:[{ "year": 2021, "month": 10, "day": 14 },[Validators.required]],
    actenddate:[{ "year": 2021, "month": 10, "day": 14 },[Validators.required]],
  }); 
  get fa() {
    return this.formActivity.controls;
  }

  yearlist = [
    {name:'2564',value:'2564'},  
    {name:'2565',value:'2565'},
    {name:'2566',value:'2566'},
  ]
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
    console.log("updateAllComplete() return ",this.allComplete);
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




 

  ngOnInit(): void {
  }

submitFormActivity(){
  if(this.formActivity.valid){
    console.log(this.formActivity.value);
  }
}


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css'],
})
export class ActivityEditComponent implements OnInit {
  public state: any;
  private selectedId: any;

  formActivity = this.formBuilder.group({
    actcode: [null, [Validators.required]],
    actname: [null, [Validators.required]],
    actdetail: [null, [Validators.required]],
    actyear: [null, [Validators.required]],
    actterm: ['', [Validators.required]],
    actstartdate: ['', [Validators.required]],
    actenddate: ['', [Validators.required]],
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
    {
      id: 11,
      name: 'คณะสถาปัตยกรรมศาสตร์ ผังเมืองและนฤมิตศิลป์',
      completed: false,
    },
    { id: 12, name: 'คณะวิทยาการสารสนเทศ', completed: false },
    { id: 13, name: 'วิทยาลัยการเมืองการปกครอง', completed: false },
    { id: 14, name: 'คณะสาธารณสุขศาสตร์', completed: false },
    { id: 15, name: 'คณะแพทยศาสตร์', completed: false },
    { id: 16, name: 'คณะสิ่งแวดล้อมและทรัพยากรศาสตร์', completed: false },
    { id: 17, name: 'คณะสัตวแพทย์', completed: false },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location
  ) {}
  onSubmit() {
    console.log(this.formActivity.value);
  }

  db2datepicker(d: string) {
    console.log('d=',d);
    let dt = new Date(d);
    console.log(dt);

    

    let dp = { year: dt.getFullYear(), month:dt.getMonth()+1 , day: dt.getDate() };
    console.log(dp);
    console.log("-----------------");
    return dp;
  }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    if (params.has('id')) {
      this.selectedId = params.get('id');
      console.log(this.selectedId);
      //this.activity = this.userService.getUsers();
      //this.activity=this.selectedId;
    }
    console.log(this.location.getState());
    this.state = this.location.getState();

      this.state.actstartdate = this.db2datepicker(this.state.actstartdate);
      this.state.actenddate = this.db2datepicker(this.state.actenddate);
  

    this.formActivity.patchValue(this.state);
  }
}

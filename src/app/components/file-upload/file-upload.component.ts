import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  form: FormGroup;
  progress: number = 0;

  constructor(
    public actService: ActivityService,
    public formbuilder: FormBuilder
  ) {
    this.form = this.formbuilder.group({
      name: [''],
      avatar: [null],
    });
  }
 
  ngOnInit(): void {}

  uploadFile(event: any) {
    console.log(event);
    const file = event.target.files[0];
    console.log(file);
    this.form.patchValue({
      avatar: file,
    });
    //this.form.get('avatar').updateValueAndValidity()
  }

  submitUser() {
    //console.log(this.form.value.avatar);
    let data = this.form.value;
    this.actService.upload(data).subscribe(
      (res)=>{
        //console.log("res=",res);
        console.log("upload file success!!")
        console.log('res=',res);
      },
      (err)=>{
        //console.log("err=",err.message);
        console.log("upload file error: ",err)
      }
    )
  }
}

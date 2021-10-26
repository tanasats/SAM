import { UserAuthService } from './../../services/user-auth.service';
//import { ToastrService } from 'ngx-toastr';
import { FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { MsuAuthenService } from 'src/app/services/msu-authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private toastService:ToastService, 
    private formBuilder:FormBuilder,
    private msuauthService:MsuAuthenService,
    private router:Router,
    private userAuthService:UserAuthService,
    ) { }

  formLogin = this.formBuilder.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]],
  }) 
  ngOnInit(): void {
    console.log('isLoggedIn=',this.userAuthService.isLoggedIn())
  }

onSubmit(){
  if(this.formLogin.valid){
    let data = this.formLogin.getRawValue();
    this.msuauthService.signin(data).subscribe(
      (res)=>{
        console.log(res);
        this.toastService.show(res.username +" ลงชื่อเข้าใช้งานสำเร็จ ",{
            classname:'bg-success text-light',
            delay: 5000,
            autohide:true,
            })   
        let auth = res;
        this.userAuthService.setToken(auth.access_token);
        this.userAuthService.setRoles({'roleName':'Admin','roleDescription':'xxx'});
        this.userAuthService.setCurrentRole('admin');
        

        //localStorage.setItem('auth', JSON.stringify(auth));
        //localStorage.setItem('access-token',auth.access_token);


        


        this.msuauthService.me().subscribe(
          (res)=>{
            console.log('me(): ',res);
            this.userAuthService.setUserInfo(res);
          },
          (err)=>{
            console.log('me() error: ',err)
          }
        )


        this.router.navigateByUrl('/');
      },
      (err)=>{
        console.log(err);
          this.toastService.show('ผิดพลาด: '+err.error, {
              classname: 'bg-danger text-light',
              delay: 5000,
              autohide: true,
            });
      }
    )
  } //if form valid
}

  xonSubmit(){
    if(this.formLogin.valid){
      let data = this.formLogin.getRawValue();
      this.authService.login(data).subscribe(
        (res) => {
          console.log(res);
          let auth = res;
          localStorage.setItem('auth', JSON.stringify(auth));
          localStorage.setItem('access-token',res.accessToken);

          this.toastService.show("สำเร็จ: "+res.email,{
            classname:'bg-success text-light',
            delay:2000,
            autohide:true,
          })
        },
        (err) => {
          console.log(err);
          if(err.status){
            console.log(err.statusText);
            let msg="อีเมล์ผู้ใช้งาน/รหัสผ่าน ไม่ถูกต้อง"
            this.toastService.show('ผิดพลาด: '+msg, {
              classname: 'bg-danger text-light',
              delay: 3000 ,
              autohide: true,
            });
          }
        }
      )
    }else{

    }
  }
}

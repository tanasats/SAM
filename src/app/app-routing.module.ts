import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LoginComponent } from './components/login/login.component';

import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'student',loadChildren:()=>import('./student/student-routing.module').then((m)=>m.StudentRoutingModule)},
  {path:'officer',loadChildren:()=>import('./officer/officer-routing.module').then((m)=>m.OfficerRoutingModule)},
  {path:'admin',loadChildren:()=>import('./admin/admin-routing.module').then((m)=>m.AdminRoutingModule)},
  {path:'login',component:LoginComponent},
  {path:'upload',component:FileUploadComponent},
  
  {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

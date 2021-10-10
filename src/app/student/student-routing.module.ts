import { CheckpointComponent } from './components/checkpoint/checkpoint.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {path:'',component:StudentComponent,
    children:[
      {path:'',component:HomeComponent},
      {path:'register',component:RegisterComponent},
      {path:'checkpoint',component:CheckpointComponent},
      {path:'**',redirectTo:'',pathMatch:'full'}
    ]},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

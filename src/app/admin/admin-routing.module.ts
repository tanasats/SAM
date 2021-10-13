import { SettingComponent } from './components/setting/setting.component';
import { ActivityViewComponent } from './components/activity-view/activity-view.component';
import { ActivityEditComponent } from './components/activity-edit/activity-edit.component';
import { ActivityAddComponent } from './components/activity-add/activity-add.component';
import { ActivityComponent } from './components/activity/activity.component';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',component:AdminComponent,
    children:[
      {path:'',component:HomeComponent},
      {path:'activity',component:ActivityComponent},
      {path:'activity/add',component:ActivityAddComponent},
      {path:'activity/edit/:id',component:ActivityEditComponent},
      {path:'activity/view/:id',component:ActivityViewComponent},
      {path:'setting',component:SettingComponent},
      {path:'**',redirectTo:'',pathMatch:'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

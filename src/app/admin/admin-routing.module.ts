import { AdminComponent } from './admin.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',component:AdminComponent,
    children:[
      {path:'',component:HomeComponent},
      {path:'**',redirectTo:'',pathMatch:'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

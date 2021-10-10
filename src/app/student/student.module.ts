import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';

import {MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

import { StudentComponent } from './student.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { CheckpointComponent } from './components/checkpoint/checkpoint.component';





@NgModule({
  declarations: [
    StudentComponent,
    SidenavComponent,
    HomeComponent,
    RegisterComponent,
    CheckpointComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule, MatTooltipModule,

  ]
})
export class StudentModule { }

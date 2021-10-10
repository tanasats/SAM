import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficerRoutingModule } from './officer-routing.module';
import { OfficerComponent } from './officer.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    OfficerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    OfficerRoutingModule
  ]
})
export class OfficerModule { }

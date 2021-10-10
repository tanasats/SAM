import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficerRoutingModule } from './officer-routing.module';
import { OfficerComponent } from './officer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';

import {MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    OfficerComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    OfficerRoutingModule,
    MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule, MatTooltipModule,

  ]
})
export class OfficerModule { }

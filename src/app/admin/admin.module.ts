import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';

import {MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';

import { ActivityComponent } from './components/activity/activity.component';
import { ActivityAddComponent } from './components/activity-add/activity-add.component';
import { ActivityListItemComponent } from './components/activity-list-item/activity-list-item.component';
import { ActivityEditComponent } from './components/activity-edit/activity-edit.component';
import { ActivityViewComponent } from './components/activity-view/activity-view.component';
import { SettingComponent } from './components/setting/setting.component';
import { ThaiDatePipe } from '../pipes/thaidate.pipe';
 


@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    HomeComponent,
    ActivityComponent,
    ActivityAddComponent, 
    ActivityListItemComponent,
    ActivityEditComponent,
    ActivityViewComponent,
    SettingComponent,
    ThaiDatePipe,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule, 
    MatTooltipModule, MatCardModule, MatFormFieldModule, MatInputModule, MatOptionModule,
    MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSlideToggleModule,
    MatMenuModule, MatGridListModule, MatDialogModule,MatTabsModule,
    NgbModule,

  ]
})
export class AdminModule { }

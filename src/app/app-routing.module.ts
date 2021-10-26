import { ProfileComponent } from './components/profile/profile.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LoginComponent } from './components/login/login.component';

import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { RoleGuardService as RoleGuard } from './services/role-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student-routing.module').then(
        (m) => m.StudentRoutingModule
      ),
    canActivate: [RoleGuard],
    data: { expectedRole: 'student' },
  },
  {
    path: 'officer',
    loadChildren: () =>
      import('./officer/officer-routing.module').then(
        (m) => m.OfficerRoutingModule
      ),
    canActivate: [RoleGuard],
    data: { expectedRole: 'officer' },
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin-routing.module').then((m) => m.AdminRoutingModule),
    canActivate: [RoleGuard],
    data: { expectedRole: 'admin' },
  },
  { path: 'login', component: LoginComponent },
  { path: 'upload', component: FileUploadComponent },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

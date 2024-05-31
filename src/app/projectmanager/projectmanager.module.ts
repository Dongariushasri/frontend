import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectmanagerRoutingModule } from './projectmanager-routing.module';
import { HomeComponent } from './home/home.component';
import { ClientinfoComponent } from './clientinfo/clientinfo.component';
import { TeammemberslistComponent } from './teammemberslist/teammemberslist.component';
import { FormsModule } from '@angular/forms';
import { CreateprojectprojectmanagerComponent } from './createprojectprojectmanager/createproject.component';
import { projecctsslistComponent } from './projecctsslist/projecctsslist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskdivideComponent } from './taskdivide/taskdivide.component';
import { AddTeammembersComponent } from './add-teammembers/add-teammembers.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { ProjectmanagerNavbarComponent } from './projectmanager-navbar/projectmanager-navbar.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    ClientinfoComponent,
    TeammemberslistComponent,
    CreateprojectprojectmanagerComponent,
    projecctsslistComponent,
    AddTeammembersComponent,
    TaskdivideComponent,
    ViewTasksComponent,
    ProjectmanagerNavbarComponent,
    ViewProfileComponent,
    EditProfileComponent,
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    ProjectmanagerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectmanagerModule { }

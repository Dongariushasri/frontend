import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeammemberRoutingModule } from './teammember-routing.module';
import { ThomeComponent } from './teammember-home/thome.component';
import { TeammembertasksComponent } from './teammembertasks/teammembertasks.component';
import { TeammemberNavbarComponent } from './teammember-navbar/teammember-navbar.component';
import { ViewAllTasksComponent } from './view-all-tasks/view-all-tasks.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './update-task/update-task.component';


@NgModule({
  declarations: [
    ThomeComponent,
    TeammembertasksComponent,
    TeammemberNavbarComponent,
    ViewAllTasksComponent,
    ViewProfileComponent,
    UpdateProfileComponent,
    UpdateTaskComponent
  ],
  imports: [
    CommonModule,
    TeammemberRoutingModule,
    FormsModule
  ]
})
export class TeammemberModule { }

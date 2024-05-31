import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThomeComponent } from './teammember-home/thome.component';
import { TeammembertasksComponent } from './teammembertasks/teammembertasks.component';
import { ViewAllTasksComponent } from './view-all-tasks/view-all-tasks.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
  {
    path:'thome',
    component:ThomeComponent
  },
  {
    path:'teammembertasks',
    component:TeammembertasksComponent
  },
  {
    path:'view-profile',
    component:ViewProfileComponent
  },
  {
    path:'update-profile/:id',
    component:UpdateProfileComponent
  }
  ,{
    path:'view-all-tasks',
    component:ViewAllTasksComponent
  }
  ,{
    path:'update-tasks/:id',
    component:UpdateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeammemberRoutingModule { }

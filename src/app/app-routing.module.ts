import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'projectmanager',
    loadChildren:()=>import('./projectmanager/projectmanager.module').then(m=>m.ProjectmanagerModule)
  },
  {
    path:'teammember',
    loadChildren:()=>import('./teammember/teammember.module').then(m=>m.TeammemberModule)

  },
  {
    path:'main-page',component:MainPageComponent
  },
  {
    path: '', 
      redirectTo: 'main-page',
      pathMatch: 'full'
  }, // Default route
  { path: '**',
       redirectTo: 'main-page' 
  }
    ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

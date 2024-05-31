import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectmanager-navbar',
  templateUrl: './projectmanager-navbar.component.html',
  styleUrl: './projectmanager-navbar.component.css'
})
export class ProjectmanagerNavbarComponent {

  constructor(private router:Router){}

  viewProfile(){
    this.router.navigate(['projectmanager/view-profile']);
  }
}

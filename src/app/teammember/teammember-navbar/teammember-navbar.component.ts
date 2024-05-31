import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teammember-navbar',
  templateUrl: './teammember-navbar.component.html',
  styleUrl: './teammember-navbar.component.css'
})
export class TeammemberNavbarComponent {

  constructor (private router:Router){}

viewProfile(){
  this.router.navigate(['teammember/view-profile']);
}

}

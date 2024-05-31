import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tmemeber } from '../../tmemeber';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent {
  teammember: Tmemeber = {
    id: null||0,
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teammemberService: AdminService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.teammemberService.getTeammemberById(id).subscribe(data => {
        this.teammember = data;
      });
    }
  }

  saveTeammember() {
    this.teammemberService.updateTeammember(this.teammember).subscribe(() => {
      alert("updated sucessfully");
      this.router.navigate(['/teammember/view-profile']);
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectManager } from '../../project-manager'; // Ensure you import the correct type
import { Tmemeber } from '../../tmemeber';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  teammember: Tmemeber = {
    id: 0,
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
      this.teammemberService.getProjectManagerById(id).subscribe((data: ProjectManager) => {
        // Convert ProjectManager to Tmemeber
        this.teammember = {
          id: data.id ?? 0,
          name: data.name,
          email: data.email,
          password: data.password
        };
      }, error => {
        console.error('Error fetching team member details', error);
      });
    }
  }

  saveTeammember(): void {
    this.teammemberService.updateProjectManager(this.teammember).subscribe(() => {
      alert("Updated successfully");
      this.router.navigate(['/projectmanager/view-profile']);
    }, error => {
      console.error('Error updating team member details', error);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { ProjectManager } from '../../project-manager';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  response: any;
  id: number = 0;
  teamMember: ProjectManager | null = null;

  constructor(private http: HttpClient, private router: Router, private teammemberservie: AdminService) {}

  ngOnInit(): void {
    // Retrieve data from local storage and parse it
    const responseData = localStorage.getItem('TeamMember');
    if (responseData) {
      this.response = JSON.parse(responseData);
      this.id = this.response.id;

      // Fetch team member details from the API
      this.fetchTeamMemberDetails(this.id);
    } else {
      // Handle case where data is not available in local storage
      console.error('No user data found in local storage');
    }
  }

  fetchTeamMemberDetails(id: number): void {   
    this.teammemberservie.getProjectManagerById(id).subscribe(data => {
      this.teamMember = data;
    }, error => {
      console.error('Error fetching team member details', error);
    });
  }

  editTeamMember(member: ProjectManager): void {
    this.router.navigate(['projectmanager/update-profile', member.id]);
  }
}

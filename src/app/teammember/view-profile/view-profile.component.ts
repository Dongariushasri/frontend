import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tmemeber } from '../../tmemeber';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  response: any;
  id: number = 0;
  teamMember: Tmemeber | null = null;

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
    this.teammemberservie.getTeamMemberById(id).subscribe(data => {
      this.teamMember = data;
    }, error => {
      console.error('Error fetching team member details', error);
    });
  }

  editTeamMember(member: Tmemeber): void {
    this.router.navigate(['teammember/update-profile', member.id]);
  }
}

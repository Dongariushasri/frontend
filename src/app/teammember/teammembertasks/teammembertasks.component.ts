import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teammembertasks',
  templateUrl: './teammembertasks.component.html',
  styleUrls: ['./teammembertasks.component.css']
})
export class TeammembertasksComponent implements OnInit {
  tasklists: Task[] = [];
  loggedInTeamMemberId: number | null = null;
  status:string=this.authService.statusOfProject;

  constructor(private taskService: AdminService, private authService: AdminService,private router:Router) {}

  ngOnInit(): void {
    this.getLoggedInTeamMemberId(); // Retrieve team member ID

    if (this.loggedInTeamMemberId !== null) {
      this.taskService.getTasksForTeamMember(this.loggedInTeamMemberId).subscribe(
        (data: Task[]) => {
          this.tasklists = data;
          console.log('Task List:', data);
        },
        (error: any) => {
          console.error('Error fetching tasks:', error);
        }
      );
    } else {
      console.error('Logged in Team Member ID is undefined or invalid.');
    }
  }

  private getLoggedInTeamMemberId(): void {
    this.loggedInTeamMemberId = this.authService.getLoggedInTeamMemberId();
    console.log('Logged in Team Member ID:', this.loggedInTeamMemberId);
  }

  navigateToUpdate(taskId: number|undefined): void {
    this.router.navigate(['/teammember/update-tasks', taskId]);
  }
}

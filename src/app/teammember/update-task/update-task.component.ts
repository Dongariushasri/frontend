import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatetask',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  task: any = {};
  taskId!: number;
  statuses: string[] = ['PENDING', 'IN_PROGRESS', 'COMPLETED'];

  constructor(
    private route: ActivatedRoute,
    private taskService: AdminService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskId = +this.route.snapshot.params['id']; 
    this.taskService.getTaskById(this.taskId).subscribe(
      data => {
        this.task = data;
      },
      error => console.error(error)
    );
  }

  updateTaskStatus(status: string): void { 
    //console.log(status); // Log the status to see if it's being passed correctly
    this.taskService.statusOfProject = status; // Assign the status to this.taskService.statusOfProject
    this.router.navigate(['/teammember/view-all-tasks']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { AdminService } from '../../admin.service';
import { TmemberComponent } from '../../admin/create-teammember/tmember.component';
import { Projecttable } from '../../projecttable';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
  tasklists: Task[] = [];
  teammeber: TmemberComponent[] = [];
  projecttable: Projecttable[] = [];
  id: number | undefined;
  status: string = '';

  constructor(private taskService: AdminService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getlisttaskes().subscribe(data => {
      this.tasklists = data;
      this.status = this.taskService.statusOfProject; 
      console.log(data);
    });
  }

  onDelete(id: number | undefined): void {
    if (id !== undefined) {
      this.taskService.deleteTask(id).subscribe(
        () => {
          // Remove the task from the tasklists array
          this.tasklists = this.tasklists.filter(task => task.id !== id);
          alert('Task deleted successfully');
        },
        error => {
          console.error('Error deleting task', error);
          alert('An error occurred while deleting the task');
        }
      );
    } else {
      alert('Invalid task ID');
    }
  }
}

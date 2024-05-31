import { Component } from '@angular/core';
import { Task } from '../../task';
import { Projecttable } from '../../projecttable';
import { AdminService } from '../../admin.service';


@Component({
  selector: 'app-view-all-tasks',
  templateUrl: './view-all-tasks.component.html',
  styleUrl: './view-all-tasks.component.css'
})
export class ViewAllTasksComponent {
  tasklists: Task[] = [];
  projecttable: Projecttable[] = [];
  filteredTasks: Task[] = [];
  showDropdown: boolean = false;

  constructor(private taskService: AdminService) {}

  ngOnInit(): void {
    this.taskService.getlisttaskes().subscribe(data => {
      this.tasklists = data;
      this.filteredTasks = data;
    });

    this.taskService.getallProjectslist().subscribe(data => {
      this.projecttable = data;
      console.log(this.projecttable)
    });
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  filterTasks(projectName: string): void {
    this.showDropdown = false;
    if (projectName === 'all') {
      this.filteredTasks = this.tasklists; // Show all tasks if "All Projects" is selected
    } else {
      this.filteredTasks = this.tasklists.filter(task => task.project.projectName === projectName);
    }
  }
}

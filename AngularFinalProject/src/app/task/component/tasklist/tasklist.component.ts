import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  tasks: Task[];
  taskHttpService

  constructor(TaskService: TaskService) {
    this.taskHttpService = TaskService;
   }

  ngOnInit() {
    this.taskHttpService.GetTasks().subscribe(tasks => this.tasks = tasks);
  }

}

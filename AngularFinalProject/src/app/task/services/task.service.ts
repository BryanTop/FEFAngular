import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/models/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  GetTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }
}

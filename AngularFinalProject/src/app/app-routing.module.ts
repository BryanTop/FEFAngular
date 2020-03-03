import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasklistComponent } from './task/component/tasklist/tasklist.component';

const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: 'tasks', component: TasklistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

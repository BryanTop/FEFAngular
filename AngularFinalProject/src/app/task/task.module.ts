import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasklistComponent } from './component/tasklist/tasklist.component';

@NgModule({
  declarations: [TasklistComponent],
  imports: [
    CommonModule
  ],
  exports: [TasklistComponent]
})
export class TaskModule { }

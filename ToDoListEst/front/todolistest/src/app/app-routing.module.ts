import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent} from './components/task-list/task-list.component';
import {TaskDetailsComponent} from './components/task-details/task-details.component';
import {AddTaskComponent} from './components/add-task/add-task.component';


const routes: Routes = [
        {path: '', redirectTo: 'tasks', pathMatch: 'full'},
        {path: 'tasks', component: TaskListComponent},
        {path: 'tasks/:id', component: TaskDetailsComponent},
        {path: 'add', component: AddTaskComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

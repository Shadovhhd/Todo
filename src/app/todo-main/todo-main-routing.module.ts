import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoMainComponent } from './todo-main.component';
import { TodoUserComponent } from './TodoUser/TodoUser.component';

const routes: Routes = [
  {
    path: '',
    component: TodoMainComponent,
    children: [
      {
        path: ':id',
        component: TodoUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoMainRoutingModule { }

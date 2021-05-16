import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from 'src/Todo/Todo.component';
import { TodoUserComponent } from 'src/Todo/TodoUser/TodoUser.component';




const routes: Routes = [
  
  { path: 'First', loadChildren: () => import('./todo-main/todo-main.module').then(m => m.TodoMainModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

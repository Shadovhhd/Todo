import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { TodoUserComponent } from './TodoUser/TodoUser.component';

interface Todo {
  userId?: string;
  id?: string;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-Todo',
  templateUrl: './Todo.component.html',
  styleUrls: ['./Todo.component.scss']
})

export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((res: Todo[]) => {
        this.todos = res;
      })
  }
  addTodo(event: Event) {
    const title = this.newTodoTitle;
    event.preventDefault();
    this.newTodoTitle = "";
    if (!title) {
      return;
    }
    const newTodo: Todo = {
      id: new Date().getTime().toString(),
      title,
      completed: false,
    }
    this.http
      .post('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe((res: Todo) => {
        console.log(res);
        this.todos = [res, ...this.todos];
      })
  }
  deleteTodo(id: string) {
    this.http
      .delete('https://jsonplaceholder.typicode.com/todos/${id}');
    this.todos = this.todos.filter((todo) => todo.id !== id);

  }

}

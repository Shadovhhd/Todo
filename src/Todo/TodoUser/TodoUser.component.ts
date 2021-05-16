import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-TodoUser',
  templateUrl: './TodoUser.component.html',
  styleUrls: ['./TodoUser.component.scss']
})
export class TodoUserComponent implements OnInit {
id: string;
users = [];
todo;
  constructor(private activateRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http
    .get('https://jsonplaceholder.typicode.com/users')
    .subscribe((res: []) => {
      this.users = res;
    })
  }
  ngDoCheck(){
    console.log(this.users);
    this.id =this.activateRoute.snapshot.params.id;
    this.todo = this.users.find((todo) => todo.id !== this.id);
    console.log(this.todo);
  }


}

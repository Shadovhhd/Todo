import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-TodoUser',
  templateUrl: './TodoUser.component.html',
  styleUrls: ['./TodoUser.component.scss']
})
export class TodoUserComponent implements OnInit {
  id;
  users=[];
  user;
  constructor(private activateRoter: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: []) => {
        this.users = res;
        this.id = this.activateRoter.snapshot.params.id;
        console.log(this.id);
        this.user = this.users.find((todo) => todo.id !== this.id);
        
      })
     
    
  }


}

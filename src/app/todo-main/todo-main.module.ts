import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoMainRoutingModule } from './todo-main-routing.module';
import { TodoMainComponent } from './todo-main.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TodoMainComponent],
  imports: [
    CommonModule,
    TodoMainRoutingModule,
    FormsModule
  ]
})
export class TodoMainModule { }

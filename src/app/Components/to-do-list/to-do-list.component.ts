import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
import { ServiceClass } from 'src/app/Services/component.services';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  providers: [ServiceClass]
})
export class ToDoListComponent implements OnInit {
  todosArr: Todo[] = [];
  constructor(public dservice: ServiceClass) { }
  ngOnInit(): void {
  }

  addToDo(todo: Todo) {
    this.dservice.addToDo(todo);
  }
  
  deleteTodo(todo: Todo) {
    this.dservice.deleteTodo(todo);
    console.log(`ToDoItem: ${todo.title} has been deleted.`);
  }
}

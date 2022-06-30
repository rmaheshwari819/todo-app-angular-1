import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
import { ServiceClass } from 'src/app/Services/component.services';
@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input()
  todoItem: Todo = new Todo;
  @Output()
  todoDeleteEmitter: EventEmitter<Todo> = new EventEmitter();
  constructor(serviceclass : ServiceClass) { }

  ngOnInit(): void {
  }

  onDelete(toDoItem: Todo){
    console.log("Delete is pressed.");
    this.todoDeleteEmitter.emit(toDoItem);
  }
}

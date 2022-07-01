import { Component, EventEmitter, OnInit, Input, Output, importProvidersFrom } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
import { ServiceClass } from 'src/app/Services/component.services';

@Component({
  selector: 'app-add-to-do-item',
  templateUrl: './add-to-do-item.component.html',
  styleUrls: ['./add-to-do-item.component.css'],
  providers: [ServiceClass]
})
export class AddToDoItemComponent implements OnInit {
  taskTitle: string = "";
  taskDescription: string = "";
  taskActive: boolean = false;
  todo: Todo = new Todo();

  @Output()
  addToDo: EventEmitter<Todo> = new EventEmitter();
  constructor(private serviceclass: ServiceClass) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.todo.title = this.taskTitle;
    this.todo.desc = this.taskDescription;
    this.todo.active = this.taskActive;
    this.addToDo.emit(this.todo);
    this.taskTitle = "";
    this.taskDescription = "";
    this.taskActive = false;


    this.serviceclass.addToDo(this.todo)

  }
}

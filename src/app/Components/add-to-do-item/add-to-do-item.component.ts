import { Component, EventEmitter, OnInit, Input, Output, importProvidersFrom } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Todo } from 'src/app/Models/Todo';
import { ServiceClass } from 'src/app/Services/component.services';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-add-to-do-item',
  templateUrl: './add-to-do-item.component.html',
  styleUrls: ['./add-to-do-item.component.css'],
  providers: [ServiceClass]
})
export class AddToDoItemComponent implements OnInit {


  userprofileform = new FormGroup({
    taskTtl: new FormControl('', Validators.required),
    taskDesc: new FormControl('', Validators.required),
    taskAct: new FormControl(false, Validators.required),
  })


  taskTitle: string = "";
  taskDescription: string = "";
  taskActive: boolean = false;
  todo: Todo = new Todo();

  @Output()
  addToDo: EventEmitter<Todo> = new EventEmitter();
  constructor(private serviceclass: ServiceClass) { }

  ngOnInit(): void {
  }

   onSubmity(){
    this.todo.title = this.userprofileform.value.taskTtl;
    this.todo.desc = this.userprofileform.value.taskDesc;
    this.todo.active = this.userprofileform.value.taskAct;
    this.addToDo.emit(this.todo)
  }
}

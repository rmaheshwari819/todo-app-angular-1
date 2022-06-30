import { Component,EventEmitter,OnInit, Input, Output, importProvidersFrom } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
import { ServiceClass } from 'src/app/Services/component.services';

@Component({
  selector: 'app-add-to-do-item',
  templateUrl: './add-to-do-item.component.html',
  styleUrls: ['./add-to-do-item.component.css'],
  providers: [ServiceClass]
})
export class AddToDoItemComponent implements OnInit {
  taskTitle:string = "";
  taskDescription:string = "";
  taskActive:boolean = false;
  todo:Todo = new Todo();

  @Output()
  addToDo:EventEmitter<Todo> = new EventEmitter();
  constructor(private serviceclass : ServiceClass) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('step1 success');
    
    this.todo.title=this.taskTitle;
    console.log('step2 success');
    this.todo.desc=this.taskDescription;
    console.log('step3 success');
    this.todo.active=this.taskActive;
    console.log('step4 success');
    //this.exampleservice.addToDo(this.todo);
    this.addToDo.emit(this.todo);
    console.log('step5 success');
    this.taskTitle="";
    this.taskDescription="";
    this.taskActive=false;
  }

}

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
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];

  getInfoFromService1(){
    this.infoReceived1 = this.dservice.getinfo1()
  }

  getInfoFromService2(){
    this.infoReceived2 = this.dservice.getinfo2()
  }

  //srNo: Number = 0;
  constructor(private dservice : ServiceClass) { }

  ngOnInit(): void {
  }

  // deleteTodo(todo:Todo){
  //   this.todosArr.splice(this.todosArr.indexOf(todo),1);
  //   console.log(`ToDoItem: ${todo.title} has been deleted.`)
  // }


  deleteTodo(todo:Todo){
    // this.dservice.deleteItem(this.srNo: Number);
    // this.todosArr.splice(this.todosArr.indexOf(todo),1);
    // console.log(`ToDoItem: ${todo.title} has been deleted.`)
  }



  addToDo(todo:Todo){
    console.log('SPIDERMAN')
    this.todosArr.push({
      srNo: this.todosArr.length + 1,
      title: todo.title,
      desc: todo.desc,
      active: todo.active,
    });
    console.log(`ToDoItem: ${todo.title} has been added to TODO list.`);
  }

}

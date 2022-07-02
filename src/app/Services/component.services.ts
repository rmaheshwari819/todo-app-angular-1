import { Injectable } from "@angular/core";
import { Todo } from "../Models/Todo";
@Injectable({
    providedIn: 'root'
})

export class ServiceClass {
    todosArr: Todo[] = [];   
    addToDo(todo: Todo) {
        this.todosArr.push({
            // srNo: this.todosArr.length + 1,
            title: todo.title,
            desc: todo.desc,
            active: todo.active,
        });
        console.log(this.todosArr);
    }

    
    deleteTodo(todo: Todo) {
        console.log(todo);
        this.todosArr.splice(this.todosArr.indexOf(todo), 1);
        console.log(`ToDoItem: ${todo.title} has been deleted.`)
    }
}

    //  deleteItem(srNo: number) {
    //     const itemIndex = this.todosArr.findIndex((todo) => todo.srNo === srNo);
    //     if (itemIndex < 0) {
    //       throw new Error('Not found');
    //     }
    //     this.todosArr.splice(itemIndex, 1);
    //     return Promise.resolve(true);
    //   }

import { Injectable } from "@angular/core";
import { Todo } from "../Models/Todo";
@Injectable({
    providedIn: 'root'
})

export class ServiceClass{

    info1: string[]=["john",'24']
    info2: string[]=["ro",'21']
    
    getinfo1(){
            return this.info1
    }

    getinfo2(){
        return this.info2
}



    todosArr: Todo[] = [];
    addToDo(todo:Todo){
        this.todosArr.push({
        srNo: this.todosArr.length + 1,
        title: todo.title,
        desc: todo.desc,
        active: todo.active,
    });
    }

    deleteTodo(todo:Todo){
        this.todosArr.splice(this.todosArr.indexOf(todo),1);
        console.log(`ToDoItem: ${todo.title} has been deleted.`)
    }


     deleteItem(srNo: number) {
        console.log('rohit maheshwari')
        const itemIndex = this.todosArr.findIndex((todo) => todo.srNo === srNo);

        if (itemIndex < 0) {
          throw new Error('Not found');
        }
    
        this.todosArr.splice(itemIndex, 1);
        return Promise.resolve(true);
      }
}

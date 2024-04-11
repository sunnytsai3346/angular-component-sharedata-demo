import { Component } from '@angular/core';
import { Todo } from './model/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  parentMessage: string ="Let's add new item ..."; 
  todos : Array<Todo> = [];
  model!:Todo ;

  constructor(){
  this.todos=[];
  }

  
  addTodo(res : Todo)
  {  
      this.model={
        task:res.task,        
        complete:res.complete
      }

      
      this.todos.push(this.model);
      
      console.log(this.todos);
  }
  removeTodo(res:Todo)
  {
    console.log("removeTodo");
    this.todos.splice(this.todos.findIndex(a=>res==a), 1);
  }
}

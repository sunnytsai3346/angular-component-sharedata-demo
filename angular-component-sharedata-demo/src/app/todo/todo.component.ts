import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
   
  @Input() parentMessageData: string ="";
  @Output() Task:EventEmitter<Todo> = new EventEmitter<Todo>();
  model:Todo;  
  
  
  
  constructor(){
    this.model= {      
      task:"",
      complete:false,
    }
  }

  taskChange(event:KeyboardEvent){
    this.model.task = (event.target as HTMLInputElement).value;
    
  }
  onSubmit()
  {    
    this.Task.emit(this.model);    
    
    
  }

}

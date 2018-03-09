import { Component, OnInit } from '@angular/core';
import { TodosService } from '../providers/todos.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];


  constructor(public todosService:TodosService) { 
    console.log('TodosComponet constructor');
    this.todos=[];
    
  }

  ngOnInit() {
    console.log('TodosComponet ngOnInit');
    this.todosService.getTodos().subscribe(
      resultado=>{
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);

      },
      error=>{
        console.debug('peticion incorrecto %o', error);

      }
    );//End subcribe
  }//End on init
  /**
   * Mapea los daros json al todo que provienen del servicio rest
   * @param resultado : any
   */
  mapeo(result: any){
    let todo:Todo;
    result.forEach(el => {
      todo=new Todo(el.title);
      todo.id=el.id;
      todo.idUser=el.userId;
      todo.completed=el.completed;

      this.todos.push(todo);
      
    });
  }
  /*eliminar(id){
    let todo:Todo;
    this.todos.forEach((el,index) =>{
      if(el.id==id){
       this.todos.splice(index,1);
       return false;
      }
    });
    console.debug('eliminar %o', id);
  }
  */
 eliminar(id){
  this.todosService.deleteId(id).subscribe(
    resultado=>{
      console.debug('peticion correcta %o', id);
      this.mapeo(resultado);

    },
    error=>{
      console.debug('peticion incorrecto %o', error);

    }
  );//End subcribe
 }
  cambiarcomple(completed){
    console.debug('antes %o', completed);
    completed=!completed;
    console.debug('despues %o', completed);
  }
}

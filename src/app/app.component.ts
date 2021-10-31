import { Component } from '@angular/core';
import { TodosService } from './todos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  constructor(private todosData:TodosService){}


ngOnInit( )
{ 
  this.todosData.getTodos().subscribe((result)=>{
    console.log("result",result)
this.data=result
  })
  }
}
  
  


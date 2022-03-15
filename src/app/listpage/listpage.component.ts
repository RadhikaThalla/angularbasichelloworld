
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styleUrls: ['./listpage.component.css']
})
export class ListpageComponent implements OnInit {
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


import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
   sidenav_opened=true; 
   
  constructor(private dialog : MatDialog){

  }
   openDialog() {
    this.dialog.open(DialogboxComponent, {
    
    });
  }
  ngOnInit(): void {
    
}

}

import { Component, OnInit } from '@angular/core';
import {CalculServicesService} from "../../Services/calcul-services.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  list:any;
  constructor(private s:CalculServicesService) { }

  ngOnInit(): void {

    this.s.getTodos().subscribe(
      (result)=>{
        this.list=result
        console.log(result)
      }

    );
  }


}

import { Component, OnInit } from '@angular/core';
import {todo} from "../../Model/Todo";
import {CalculServicesService} from "../Services/calcul-services.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todolist!:todo[];
  constructor(private s:CalculServicesService) { }

  ngOnInit(): void {
    this.todolist=[
      {"userId": 1, "id": 1, "title": "delectus aut autem", "completed": false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis etofficia qui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniamminus", "completed": false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam utab", "completed": true}];

  }
  getNumberOf(list:any[], critiria:string, value:any){
    console.log(this.s.getNumberOf(list,critiria,value));
    console.log(list,critiria,value);
  }
}

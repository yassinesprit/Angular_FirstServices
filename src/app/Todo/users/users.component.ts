import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../Model/Utilisateur";
import {CalculServicesService} from "../Services/calcul-services.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers!:Utilisateur[];
  constructor(private s:CalculServicesService) { }

  ngOnInit(): void {
    this.listUsers=[
      {id: 1, name: "Leanne Graham", username: "Bret", email:"Sincere@april.biz"},
      {id: 2, name: "Ervin Howell", username: "Bret", email:"Shanna@melissa.tv"},
      {id: 3, name: "Clementine Bauch", username: "Samantha", email:"Nathan@yesenia.net"}
    ]
  }

  getNumberOf(list:any[], critiria:string, value:any){
    console.log(this.s.getNumberOf(list,critiria,value));
    console.log(list,critiria,value);
  }
}

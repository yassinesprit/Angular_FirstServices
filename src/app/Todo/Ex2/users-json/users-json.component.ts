import { Component, OnInit } from '@angular/core';
import  * as users from '../../../../assets/Users.json';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users-json',
  templateUrl: './users-json.component.html',
  styleUrls: ['./users-json.component.css']
})
export class UsersJsonComponent implements OnInit {
list!:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log(users);
    this.http.get("assets/Users.json").subscribe(data =>{
      console.log(data);
      this.list = data;
      console.log(this.list);

  });

}}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CalculServicesService} from "../../Services/calcul-services.service";

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css']
})
export class UsersdetailsComponent implements OnInit {
  id:any;
  list!:any[];
  constructor(private ac:ActivatedRoute,private s:CalculServicesService) { }

  ngOnInit(): void {
    console.log(this.id=this.ac.snapshot.params['id']);
    this.s.getTodosByUser(this.id).subscribe(
      (result)=>{
        this.list=result
        console.log(result)
      });
  }/*
  getTodosByUser(id:number){
    this.s.getTodosByUser(id).subscribe(
      (result)=>{
        this.list=result
        console.log(result)
      });
  }*/
}

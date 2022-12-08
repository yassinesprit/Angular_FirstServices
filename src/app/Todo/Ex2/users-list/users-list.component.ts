import { Component, OnInit } from '@angular/core';
import {CalculServicesService} from "../../Services/calcul-services.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersLISTComponent implements OnInit {
list!:any[];
  constructor(private s:CalculServicesService) { }

  ngOnInit(): void {
    this.s.getUsers().subscribe(
      (result)=>{
        this.list=result
        console.log(result)
      }

    );
  }

}

import { Injectable } from '@angular/core';
import {todo} from "../../Model/Todo";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "../../Model/Utilisateur";


@Injectable({
  providedIn: 'root'
})
export class CalculServicesService {

  constructor(private http: HttpClient) { }

  getNumberOf(list:any[], critiria:string, value:any){
    var s =0;
    for(var i = 0; i < list.length; i++)
    {
      if(list[i][critiria] === value)
      {
        s++;
      }
    }
    return s;
  }


  getTodos():Observable<todo[]>{
    return this.http.get<todo[]>('https://jsonplaceholder.typicode.com/todos')
  }
  getUsers():Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>('https://jsonplaceholder.typicode.com/users')
  }
  getTodosByUser(idu:number):Observable<todo[]>{
    return this.http.get<todo[]>('https://jsonplaceholder.typicode.com/todos?userId='+idu)
  }
}

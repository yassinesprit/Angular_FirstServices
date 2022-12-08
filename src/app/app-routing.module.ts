import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "./Todo/todo-list/todo-list.component";
import {ProductsComponent} from "./Todo/products/products.component";
import {UsersComponent} from "./Todo/users/users.component";
import {TodoComponent} from "./Todo/Ex2/todo/todo.component";
import {UsersLISTComponent} from "./Todo/Ex2/users-list/users-list.component";
import {UsersdetailsComponent} from "./Todo/Ex2/usersdetails/usersdetails.component";
import {UsersJsonComponent} from "./Todo/Ex2/users-json/users-json.component";

const routes: Routes = [
  {
    path:"todo",component:TodoListComponent
  },
  {
    path:"products",component:ProductsComponent
  },
  {
    path:"users",component:UsersComponent
  },
  {
    path:"todolist",component:TodoComponent
  },
  {
    path:"userlist",component:UsersLISTComponent
  },
  {
    path:"details/:id" , component:UsersdetailsComponent
  },
  {
    path:"json" , component:UsersJsonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

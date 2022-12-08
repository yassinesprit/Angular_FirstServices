import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './Todo/todo-list/todo-list.component';
import { ProductsComponent } from './Todo/products/products.component';
import { UsersComponent } from './Todo/users/users.component';
import {FormsModule} from "@angular/forms";
import { TodoComponent } from './Todo/Ex2/todo/todo.component';
import {HttpClientModule} from "@angular/common/http";
import { UsersLISTComponent } from './Todo/Ex2/users-list/users-list.component';
import { UsersdetailsComponent } from './Todo/Ex2/usersdetails/usersdetails.component';
import { UsersJsonComponent } from './Todo/Ex2/users-json/users-json.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ProductsComponent,
    UsersComponent,
    TodoComponent,
    UsersLISTComponent,
    UsersdetailsComponent,
    UsersJsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

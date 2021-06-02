import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {TodoService} from './services/todo.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskTodoComponent } from './components/task-todo/task-todo.component';
import { FilterPipe } from './pipes/filter.pipe';


const appRoute : Routes =[
  {
   path:'',
   redirectTo:'/index',
   pathMatch:'full'
  },
  {
    path:'index',
    component: TaskTodoComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TodolistComponent,
    FooterComponent,
    TaskTodoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

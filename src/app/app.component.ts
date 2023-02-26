
import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from './common/model/user.model'
import {Genre} from "./common/model/genres.model";
import {Borrowing} from './common/model/borrowing.model';
import {Book} from './common/model/book.model';

export enum Menu{
  BOOKS = 'BOOKS',
  USERS = 'USERS',
  BORROWINGS = 'BORROWINGS',
  GENRE = 'GENRE'

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu = Menu
  actualMenu: Menu = Menu.USERS;

  changeMenu(menuItem: Menu): void{
    this.actualMenu = menuItem;
  }
}




import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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
  formGroup: FormGroup;
  formBooks: FormGroup;
  formBorrows: FormGroup;
  formGenres: FormGroup;

  persons: Array<{
    name: string;
    surname: string;
  }> = [];
  books: Array<{
    name: string;
    author: string;
  }> = [];
  borrows: Array<{
    name: string;
    bookname: string;
  }> = [];
  genres: Array<{
    genre: string;
  }> = [];
  menu = Menu
  actualMenu: Menu = Menu.USERS;
  constructor() {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      surname: new FormControl()
    })
    this.formBooks = new FormGroup({
      name: new FormControl(),
      author: new FormControl()
    })
    this.formBorrows = new FormGroup({
      name: new FormControl(),
      bookname: new FormControl()
    })
    this.formGenres = new FormGroup({
      genre: new FormControl(),

    })
  }

  changeMenu(menuItem: Menu): void{
    this.actualMenu = menuItem;
  }

  savePerson(): void{
    this.persons.push(this.formGroup.value);
    this.formGroup.reset()
  }
  saveBook(): void{
    this.books.push(this.formBooks.value);
    this.formBooks.reset()
  }
  saveBorrowing(): void{
    this.borrows.push(this.formBorrows.value);
    this.formBorrows.reset()
  }
  saveGenres(): void{
    this.genres.push(this.formGenres.value);
    this.formGenres.reset()
  }


}




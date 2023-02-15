import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule} from "@angular/forms";

export enum Menu {
  BOOKS = 'BOOKS',
  USERS = 'USERS',
  BORROWINGS = 'BORROWINGS',
  GENRES = 'GENRES'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  formPersons: FormGroup;
  formBooks: FormGroup;
  formGenres: FormGroup;
  formBorrowings: FormGroup;
  persons: Array<{
    name: string;
    surname: string
  }> = [];
  books: Array<{
    name: string;
    author: string
  }> = [];
  genres: Array<{
    genre: string;
  }> = [];
  borrowings: Array<{
    bookName: string;
    borrowerName: string
  }> = [];
  menu = Menu;
  actualMenu = Menu.USERS;


  constructor() {
    this.formPersons = new FormGroup({
      name: new FormControl(),
      surname: new FormControl()
    })
    this.formBooks = new FormGroup({
      name: new FormControl(),
      author: new FormControl()
    })
    this.formBorrowings = new FormGroup({
      bookName: new FormControl(),
      borrowerName: new FormControl()
    })
    this.formGenres = new FormGroup({
      genre: new FormControl(),
    })
  }

  changeMenu(menuItem: Menu): void {
    this.actualMenu = menuItem;
  }
  savePerson(): void{
    this.persons.push(this.formPersons.value);
    this.formPersons.reset();
  }
  saveBook(): void{
    this.books.push(this.formBooks.value);
    this.formBooks.reset();
  }
  saveGenre(): void{
    this.genres.push(this.formGenres.value);
    this.formGenres.reset();
  }
  saveBorrowing(): void{
    this.borrowings.push(this.formBorrowings.value);
    this.formBorrowings.reset();
  }
}

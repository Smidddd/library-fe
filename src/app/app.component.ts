
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
  formGroup: FormGroup;
  formBooks: FormGroup;
  formBorrows: FormGroup;
  formGenres: FormGroup;

  persons: Array<User> = [];
  genres: Array<Genre> = [];
  borrows: Array<Borrowing> = [];
  books: Array<Book> = [];

  menu = Menu
  actualMenu: Menu = Menu.USERS;
  constructor() {
    this.formGroup = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
    this.formBooks = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required)
    })
    this.formGenres = new FormGroup({
      id: new FormControl(),
      genre: new FormControl(null, Validators.required),
      
    this.formBorrows = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, Validators.required),
      bookname: new FormControl(null, [Validators.required])
      
    })
  }

  changeMenu(menuItem: Menu): void{
    this.actualMenu = menuItem;
  }

  savePerson(): void {
    if (this.formGroup.controls.id.value) {
      const index = this.persons.findIndex(person => person.id === this.formGroup.controls.id.value);
      if (index !== -1) { this.persons[index] = this.formGroup.value; }
    } else {
      this.persons.push({ id: Date.now(),
        name: this.formGroup.controls.name.value,
        surname: this.formGroup.controls.surname.value });
    }
    this.formGroup.reset();
  }
  deletePerson(index: number): void {
    this.persons.splice(index, 1);
  }
  editPerson(index: number): void {
    this.formGroup.setValue(this.persons[index]);
  }

  saveBorrowing(): void{
    if (this.formBorrows.controls.id.value) {
      const index = this.borrows.findIndex(borrow => borrow.id === this.formBorrows.controls.id.value);
      if (index !== -1) { this.borrows[index] = this.formBorrows.value; }
    } else {
      this.borrows.push({ id: Date.now(),
        name: this.formBorrows.controls.name.value,
        bookname: this.formBorrows.controls.bookname.value });
    }
    this.formBorrows.reset();
  }
  deleteBorrow(index: number): void {
    this.borrows.splice(index, 1);
  }
  editBorrow(index: number): void {
    this.formBorrows.setValue(this.borrows[index]);
  }

  saveGenres(): void {
    if (this.formGenres.controls.id.value) {
      const index = this.genres.findIndex(genre => genre.id === this.formGenres.controls.id.value);
      if (index !== -1) { this.genres[index] = this.formGenres.value; }
    } else {
      this.genres.push({ id: Date.now(),
        genre: this.formGenres.controls.genre.value});
    }
    this.formGenres.reset();
  }
  editGenres(index: number): void {
    this.formGenres.setValue(this.genres[index]);
  }
  deleteGenres(index: number): void {
    this.genres.splice(index, 1);
  }

  saveBook(): void {
    if (this.formBooks.controls.id.value) {
      const index = this.books.findIndex(book => book.id === this.formBooks.controls.id.value);
      if (index !== -1) { this.books[index] = this.formBooks.value; }
    } else {
      this.books.push({ id: Date.now(),
        name: this.formBooks.controls.name.value,
        author: this.formBooks.controls.author.value });
    }
    this.formBooks.reset();
  }
  editBook(index: number): void {
    this.formBooks.setValue(this.books[index]);
  }
  deleteBook(index: number): void {
    this.books.splice(index, 1);
  }
}




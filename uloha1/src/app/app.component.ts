import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

export enum Menu {
  BOOKS = 'BOOKS',
  USERS = 'USERS',
  BORROWINGS = 'BORROWINGS',

  GENRE = 'GENRES'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent {
    menu = Menu;
  actualMenu: Menu = Menu.USERS;
  form: FormGroup;

  formBooks: FormGroup;
  formGenres: FormGroup;
  formBorrows: FormGroup;
  persons: Array<any> = [];
  books: Array<any> = [];
  genres: Array<any> = [];
  borrows: Array<any> = [];


  constructor() {
    this.form = new FormGroup({
      name: new FormControl(),
      surname: new FormControl()
    })
    this.formBooks = new FormGroup({
      autor: new FormControl(),
      nazovKnihy: new FormControl()
    })
    this.formGenres = new FormGroup({
      zaner: new FormControl()
    })
    this.formBorrows = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      nazovKnihy: new FormControl()
    })
  }
  changeMenu(menuItem: Menu): void {
    this.actualMenu = menuItem;
  }

  savePerson(): void {
    this.persons.push(
      this.form.value);
    this.form.reset();
  }
  saveBooks(): void {
    this.books.push(
      this.formBooks.value);
    this.formBooks.reset();
  }
  saveBorrows(): void {
    this.borrows.push(
      this.formBorrows.value);
    this.formBorrows.reset();
  }
  saveGenres(): void {
    this.genres.push(
      this.formGenres.value);
    this.formGenres.reset();
  }

}









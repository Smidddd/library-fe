
import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from './common/model/user.model'
import {Genre} from "./common/model/genres.model";
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
  books: Array<{
    name: string;
    author: string;
  }> = [];
  borrows: Array<{
    name: string;
    bookname: string;
  }> = [];
  genres: Array<Genre> = [];
  menu = Menu
  actualMenu: Menu = Menu.USERS;
  constructor() {
    this.formGroup = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3)])
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
      id: new FormControl(),
      genre: new FormControl(null, Validators.required),
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
  saveBook(): void{
    this.books.push(this.formBooks.value);
    this.formBooks.reset()
  }
  saveBorrowing(): void{
    this.borrows.push(this.formBorrows.value);
    this.formBorrows.reset()
  }

  deletePerson(index: number): void {
    this.persons.splice(index, 1);
  }
  editPerson(index: number): void {
    this.formGroup.setValue(this.persons[index]);
  }
  deleteGenres(index: number): void {
    this.genres.splice(index, 1);
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
}




import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {Book} from "../../common/model/book.model";


export enum Menu{
  BOOKS = 'BOOKS'

}
@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {

  formBooks: FormGroup;

  books: Array<Book> = []

  menu = Menu
  actualMenu: Menu = Menu.BOOKS;
  constructor() {
    this.formBooks = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required)
    })

  }

  deleteBook(index: number): void {
    this.books.splice(index, 1);
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
}

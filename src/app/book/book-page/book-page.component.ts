import { Component } from '@angular/core';


import {Book} from "../../common/model/book.model";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {

  books: Array<Book> = []
  book?: Book;

  createBook(book: Book): void {
    this.books.push(book);
    console.log('BOOKS:', this.books);
  }
  updateBook(book: Book): void {
    const index = this.books.findIndex(
      book => book.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
      this.book = undefined;
    }
  }
  selectBookToUpdate(bookId: number): void {
    this.book = this.books.find(book =>
      book.id === bookId);
  }

  deleteBook(bookId: number): void {
    const index = this.books.findIndex(book =>
      book.id === bookId);
    if (index !== -1) { this.books.splice(index, 1); }
  }
}

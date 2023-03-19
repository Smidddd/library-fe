
import {Book} from "../../common/model/book.model";
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Genre} from "../../common/model/genres.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Input()
  books: Array<Book> = []; // NOVE
  genres: Array<Genre> = []

  @Output()
  bookToUpdate = new EventEmitter<number>();
  @Output()
  bookToDelete = new EventEmitter<number>();
  editBook(bookId: number): void {
    this.bookToUpdate.emit(bookId);
  }
  deleteBook(bookId: number): void {
    this.bookToDelete.emit(bookId);
  }
}

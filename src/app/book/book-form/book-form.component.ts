
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book, BookResponse} from "../../common/model/book.model";
import {Genre} from "../../common/model/genres.model";
import {BorrowingResponse} from "../../common/model/borrowing.model";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})

export class BookFormComponent {
  genreList: Array<number>;
  @Input()
  genres?: Genre[];
  formBooks: FormGroup;

  @Output()
  formCancel = new EventEmitter<void>();

  @Output()
  formCreate = new EventEmitter<Book>();
  @Output()
  formUpdate = new EventEmitter<Book>();

  constructor() {
    this.genreList = new Array<number>()
    this.formBooks = new FormGroup({
      bookId: new FormControl(),
      authorFirstName: new FormControl(null),
      authorLastName: new FormControl(null),
      title: new FormControl(null),
      isbn: new FormControl(null),
      count: new FormControl(null),
      categoryIds: new FormControl(null)
    })
  }


  saveGenres(): void{
    this.genreList.push(this.formBooks.controls.categoryIds.value)
    console.log(this.genreList)
  }

  @Input()
  set bookData(book: Book | undefined) {
    if (book) {
      this.formBooks.setValue(book);
    }
  }
  saveBook(): void {
    if (this.formBooks.valid) {
      if (this.formBooks.controls.bookId.value) {
        this.formUpdate.emit(
          this.prepareBook(this.formBooks.controls.bookId.value));
      } else {
        this.formCreate.emit(this.prepareBook());
      }
    } }
  private prepareBook(id?: number): Book {
    return {
      bookId: id !== undefined ? id : Date.now(),
      authorFirstName: this.formBooks.controls.authorFirstName.value,
      authorLastName: this.formBooks.controls.authorLastName.value,
      title: this.formBooks.controls.title.value,
      isbn: this.formBooks.controls.isbn.value,
      count: this.formBooks.controls.count.value,
      categoryIds: this.genreList
    };
  }
}


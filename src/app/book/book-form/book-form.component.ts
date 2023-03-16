
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../common/model/book.model";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {


  @Output()
  formCreate = new EventEmitter<Book>();
  formBooks: FormGroup;
  @Output()
  formUpdate = new EventEmitter<Book>();

  constructor() {
    this.formBooks = new FormGroup({
      bookId: new FormControl(),
      authorFirstName: new FormControl(null, Validators.required),
      authorLastName: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      isbn: new FormControl(null, Validators.required),
      count: new FormControl(null, Validators.required),
      categoryIds: new FormControl(null,Validators.required)
    })
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
      this.formBooks.reset();
    } }
  private prepareBook(id?: number): Book {
    let string = this.formBooks.controls.categoryIds.value
    let array = string.split(",")
    console.log(array)
    return {
      bookId: id !== undefined ? id : Date.now(),
      authorFirstName: this.formBooks.controls.authorFirstName.value,
      authorLastName: this.formBooks.controls.authorLastName.value,
      title: this.formBooks.controls.title.value,
      isbn: this.formBooks.controls.isbn.value,
      count: this.formBooks.controls.count.value,
      categoryIds: array
    };
  }
}



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
      id: new FormControl(),
      name: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required)
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
      if (this.formBooks.controls.id.value) {
        this.formUpdate.emit(
          this.prepareBook(this.formBooks.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareBook());
      }
      this.formBooks.reset();
    } }
  private prepareBook(id?: number): Book {
    return {
      id: id !== undefined ? id : Date.now(),
      name: this.formBooks.controls.name.value,
      author: this.formBooks.controls.author.value, };
  }
}


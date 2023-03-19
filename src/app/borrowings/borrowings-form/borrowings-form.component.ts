import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Borrowing} from "../../common/model/borrowing.model";
import {User} from "../../common/model/user.model";
import {Book} from "../../common/model/book.model";


@Component({
  selector: 'app-borrowings-form',
  templateUrl: './borrowings-form.component.html',
  styleUrls: ['./borrowings-form.component.css']
})
export class BorrowingsFormComponent {
  @Input()
  users?: User[];

  @Input()
  books?: Book[];


  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      bookId: new FormControl(null),
      customerId: new FormControl(null)

    })
  }
  @Output()
  formCreate = new EventEmitter<Borrowing>();

  @Output()
  formUpdate = new EventEmitter<Borrowing>();


  @Input()
  set borrowingData(borrowing: Borrowing | undefined) {
    if (borrowing) {
      this.form.setValue(borrowing);
    }
  }
  @Output()
  formCancel = new EventEmitter<void>();

  saveBorrowing(): void {
    if (this.form.valid) {
      if (this.form.controls.id.value) {
        this.formUpdate.emit(
          this.prepareBorrow(this.form.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareBorrow());
      }
    }
  }
  private prepareBorrow(id?: number): Borrowing {
    return {
      id: id !== undefined ? id : Date.now(),
      bookId: this.form.controls.bookId.value,
      customerId: this.form.controls.customerId.value,
    };
  }
}

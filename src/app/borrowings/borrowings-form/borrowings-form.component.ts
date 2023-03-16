import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Borrowing} from "../../common/model/borrowing.model";
import {User} from "../../common/model/user.model";

@Component({
  selector: 'app-borrowings-form',
  templateUrl: './borrowings-form.component.html',
  styleUrls: ['./borrowings-form.component.css']
})
export class BorrowingsFormComponent {
  @Input()
  users?: User[];

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      user: new FormControl(null),
      book: new FormControl(null)
    })
  }
  @Output()
  formCreate = new EventEmitter<Borrowing>();

  @Output()
  formUpdate = new EventEmitter<Borrowing>();

  /*@Input()*/
 /* set borrowingData(borrowing: Borrowing | undefined) {
    if (borrowing) {
      this.formBorrows.setValue(borrowing);
    }
  }*/

  saveBorrowing(): void {
    console.log('VALUE:', this.form.value);
  }
  /*private prepareBorrow(id?: number): Borrowing {
    return {
      id: id !== undefined ? id : Date.now(),
      bookId: this.formBorrows.controls.bookId.value,
      customerId: this.formBorrows.controls.customerId.value,
    };
  }*/
}

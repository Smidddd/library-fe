import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Borrowing} from "../../common/model/borrowing.model";

@Component({
  selector: 'app-borrowings-form',
  templateUrl: './borrowings-form.component.html',
  styleUrls: ['./borrowings-form.component.css']
})
export class BorrowingsFormComponent {
  @Output()
  formCreate = new EventEmitter<Borrowing>();
  formBorrows: FormGroup;
  @Output()
  formUpdate = new EventEmitter<Borrowing>();
  constructor() {
    this.formBorrows = new FormGroup({
      id: new FormControl(),
      bookId: new FormControl(null, Validators.required),
      customerId: new FormControl(null, [Validators.required])
    })
  }
  @Input()
  set borrowingData(borrowing: Borrowing | undefined) {
    if (borrowing) {
      this.formBorrows.setValue(borrowing);
    }
  }
  saveBorrowing(): void {
    if (this.formBorrows.valid) {
      if (this.formBorrows.controls.id.value) {
        this.formUpdate.emit(
          this.prepareBorrow(this.formBorrows.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareBorrow());
      }
      this.formBorrows.reset();
    }
  }
  private prepareBorrow(id?: number): Borrowing {
    return {
      id: id !== undefined ? id : Date.now(),
      bookId: this.formBorrows.controls.bookId.value,
      customerId: this.formBorrows.controls.customerId.value,
    };
  }
}

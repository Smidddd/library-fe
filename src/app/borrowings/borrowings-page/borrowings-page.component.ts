import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Borrowing} from "../../common/model/borrowing.model";
export enum Menu{
  BORROWINGS = 'BORROWINGS'
}
@Component({
  selector: 'app-borrowings-page',
  templateUrl: './borrowings-page.component.html',
  styleUrls: ['./borrowings-page.component.css']
})
export class BorrowingsPageComponent {
  formBorrows: FormGroup;
  borrows: Array<Borrowing> = [];
  menu = Menu
  actualMenu: Menu = Menu.BORROWINGS;
  constructor() {
    this.formBorrows = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, Validators.required),
      bookname: new FormControl(null, [Validators.required])
    })
  }

  changeMenu(menuItem: Menu): void{
    this.actualMenu = menuItem;
  }
  saveBorrowing(): void{
    if (this.formBorrows.controls.id.value) {
      const index = this.borrows.findIndex(borrow => borrow.id === this.formBorrows.controls.id.value);
      if (index !== -1) { this.borrows[index] = this.formBorrows.value; }
    } else {
      this.borrows.push({ id: Date.now(),
        name: this.formBorrows.controls.name.value,
        bookname: this.formBorrows.controls.bookname.value });
    }
    this.formBorrows.reset();
  }
  deleteBorrow(index: number): void {
    this.borrows.splice(index, 1);
  }
  editBorrow(index: number): void {
    this.formBorrows.setValue(this.borrows[index]);
  }
}

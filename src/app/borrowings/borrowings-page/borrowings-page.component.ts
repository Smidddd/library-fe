import { Component } from '@angular/core';
import {Borrowing} from "../../common/model/borrowing.model";

@Component({
  selector: 'app-borrowings-page',
  templateUrl: './borrowings-page.component.html',
  styleUrls: ['./borrowings-page.component.css']
})
export class BorrowingsPageComponent {
  borrowings: Array<Borrowing> = [];
  borrowing?: Borrowing;

  createBorrowing(borrowing: Borrowing): void {
    this.borrowings.push(borrowing);
    console.log('PERSONS:', this.borrowings);
  }
  updateBorrowing(borrowing: Borrowing): void {
    const index = this.borrowings.findIndex(
      borrowing => borrowing.id === borrowing.id);
    if (index !== -1) {
      this.borrowings[index] = borrowing;
      this.borrowing = undefined;
    }
  }
  selectBorrowingToUpdate(borrowingId: number): void {
    this.borrowing = this.borrowings.find(borrowing => borrowing.id === borrowingId);
  }
  deleteBorrowing(borrowingId: number): void {
    const index = this.borrowings.findIndex(borrowing =>
      borrowing.id === borrowingId);
    if (index !== -1) { this.borrowings.splice(index, 1); }
  }
}

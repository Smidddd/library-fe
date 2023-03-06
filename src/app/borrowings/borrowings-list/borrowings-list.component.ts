import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Borrowing} from "../../common/model/borrowing.model";

@Component({
  selector: 'app-borrowings-list',
  templateUrl: './borrowings-list.component.html',
  styleUrls: ['./borrowings-list.component.css']
})
export class BorrowingsListComponent {
  @Input()
  borrowings: Array<Borrowing> = []; // NOVE

  @Output()
  borrowingToUpdate = new EventEmitter<number>();
  updateBorrowing(borrowId: number): void { // NOVE
    this.borrowingToUpdate.emit(borrowId);
  }
  @Output()
  borrowingToDelete = new EventEmitter<number>();
  deleteBorrowing(borrowId: number): void {
    this.borrowingToDelete.emit(borrowId);
  }
}

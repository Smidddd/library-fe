import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Borrowing, BorrowingResponse} from "../../common/model/borrowing.model";

@Component({
  selector: 'app-borrowings-list',
  templateUrl: './borrowings-list.component.html',
  styleUrls: ['./borrowings-list.component.css']
})
export class BorrowingsListComponent {
  @Input()
  borrowings: Array<BorrowingResponse> = []; // NOVE

  @Output()
  borrowingToDelete = new EventEmitter<number>();
  deleteBorrowing(borrowId: number): void {
    this.borrowingToDelete.emit(borrowId);
  }
}

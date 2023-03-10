import { Component } from '@angular/core';
import {Borrowing} from "../../common/model/borrowing.model";
import {BorrowingsService} from "../../common/service/borrowings.service";

@Component({
  selector: 'app-borrowings-page',
  templateUrl: './borrowings-page.component.html',
  styleUrls: ['./borrowings-page.component.css']
})
export class BorrowingsPageComponent {
  borrowings: Array<Borrowing> = [];
  borrowing?: Borrowing;

  constructor(private service: BorrowingsService) {
    this.getBorrowings();
  }

  getBorrowings(): void {
    this.service.getBorrowings().subscribe((borrowings: Borrowing[]) => { this.borrowings = borrowings; });
  }
  createBorrowing(borrowing: Borrowing): void {
    this.service.createBorrowing(borrowing).subscribe(() => { console.log('Vypozicka bola úspešne uložená.');
      this.getBorrowings();
    })
  }
  selectBorrowingToUpdate(borrowingId: number): void {
    this.service.getBorrowing(borrowingId).subscribe((borrowing: Borrowing) => { this.borrowing = borrowing; });
    }
  updateBorrowing(borrowing: Borrowing): void {
    this.service.updateBorrowing(borrowing).subscribe(() => { console.log('Vypozicka bola úspešne zmenená.');
      this.getBorrowings();
    })
  }
  deleteBorrowing(borrowingId: number): void {
    this.service.deleteBorrowing(borrowingId).subscribe(() => { console.log('Vypozicka bola úspešne zmazaná.');
      this.getBorrowings();
    })
  }
}

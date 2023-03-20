import {Component, OnDestroy} from '@angular/core';
import {Borrowing, BorrowingResponse} from "../../common/model/borrowing.model";
import {BorrowingsService} from "../../common/service/borrowings.service";
import {User} from "../../common/model/user.model";
import {UserService} from "../../common/service/user.service";
import {Book, BookResponse} from "../../common/model/book.model";
import {BooksService} from "../../common/service/books.service";
import {Subscription} from 'rxjs';
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {ToastService} from "angular-toastify";
import {Router} from "@angular/router";
@UntilDestroy()
@Component({
  selector: 'app-borrowings-page',
  templateUrl: './borrowings-page.component.html',
  styleUrls: ['./borrowings-page.component.css']
})
export class BorrowingsPageComponent implements OnDestroy {
  borrowings: Array<BorrowingResponse> = [];
  borrowing?: BorrowingResponse;
  users?: User[];
  books?: BookResponse[];
  private getListSubscription?: Subscription;
  constructor(private userService: UserService,
              private bookService: BooksService,
              private service: BorrowingsService,
              private toastService: ToastService,
              private router: Router) {
    this.getUsers();
    this.getBooks();
    this.getBorrowings();
  }
  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }
  getBooks(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    })
  }

  getBorrowings(): void {
    this.service.getBorrowings().pipe(untilDestroyed(this)).subscribe((borrowings: BorrowingResponse[]) => {
      this.borrowings = borrowings;
    });
  }
  createBorrowing(borrowing: Borrowing): void {
    this.service.createBorrowing(borrowing).subscribe(() => { console.log('Vypozicka bola úspešne uložená.');
      this.getBorrowings();
    })
  }
  deleteBorrowing(borrowingId: number): void {

    if (window.confirm('Naozaj chcete vymazať Vypozicka?')) {
      this.service.deleteBorrowing(borrowingId).pipe(untilDestroyed(this)).subscribe(() => {
        this.toastService.success('Vypozicka bola úspešne zmazaná.');
        this.getBorrowings();
      }, () => {
        this.toastService.error('Chyba. Vypozicka nebola zmazaná.');
      })
    }
  }
  ngOnDestroy(): void {
    this.getListUnsubscribe();
  }
  getListUnsubscribe(): void {
    if (this.getListSubscription) {
      this.getListSubscription.unsubscribe();
      this.getListSubscription = undefined;
    }
  }

}

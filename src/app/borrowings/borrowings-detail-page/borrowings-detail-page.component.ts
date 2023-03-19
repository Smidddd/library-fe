import { Component } from '@angular/core';
import {Borrowing} from "../../common/model/borrowing.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "angular-toastify";
import {UserService} from "../../common/service/user.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {BorrowingsService} from "../../common/service/borrowings.service";
@UntilDestroy()
@Component({
  selector: 'app-borrowings-detail-page',
  templateUrl: './borrowings-detail-page.component.html',
  styleUrls: ['./borrowings-detail-page.component.css']
})
export class BorrowingsDetailPageComponent {
  borrowing?: Borrowing;

  private borrowingId: number | null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: BorrowingsService,
              private toastService: ToastService) {
    this.borrowingId = Number(route.snapshot.paramMap.get('borrowingId'));
    this.getBorrowing();
  }
  getBorrowing(): void { // PREMIESTNENE Z user-page.component.ts
    if (this.borrowingId) {
      this.service.getBorrowing(this.borrowingId).pipe(untilDestroyed(this)).subscribe((borrowing: Borrowing) => {
        this.borrowing = borrowing;
      });
    }
  }
  cancel(): void {
    this.router.navigate(['user']);
  }
}

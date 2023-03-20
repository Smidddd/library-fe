import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Borrowing, BorrowingResponse} from "../model/borrowing.model";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class BorrowingsService {
  private url = 'http://localhost:8080/api/borrowings';
  constructor(private http: HttpClient) {
    this.getBorrowings();
  }

  getBorrowings(): Observable<BorrowingResponse[]> {
    return this.http.get<BorrowingResponse[]>(this.url);
  }
  getBorrowing(borrowingId: number): Observable<BorrowingResponse> {
    return this.http.get<BorrowingResponse>(`${this.url}/${borrowingId}`);
  }
  createBorrowing(borrowing: Borrowing): Observable<number> {
    return this.http.post<number>(this.url, borrowing);
  }
  deleteBorrowing(borrowingId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${borrowingId}`);
  }

}

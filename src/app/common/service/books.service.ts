import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Book, BookResponse} from "../model/book.model";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) { }
  getBooks(): Observable<BookResponse[]> {
    return this.http.get<BookResponse[]>(this.url);
  }
  getBook(bookId: number): Observable<BookResponse> {
    return this.http.get<BookResponse>(`${this.url}/${bookId}`);
  }
  createBook(book: Book): Observable<number> {
    return this.http.post<number>(this.url, book);
  }
  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>
    (`${this.url}/${book.bookId}`, book);
  }
  deleteBook(bookId: number): Observable<void> {
    return this.http.delete<void>
    (`${this.url}/${bookId}`);
  }
}

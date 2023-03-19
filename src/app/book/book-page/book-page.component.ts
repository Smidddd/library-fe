import {Component, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Book} from "../../common/model/book.model";
import {BooksService} from "../../common/service/books.service";
import {Genre} from "../../common/model/genres.model";
import {GenreService} from "../../common/service/genre.service";
import {Subscription} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {ToastService} from "angular-toastify";
import {Route, Router} from "@angular/router";

@UntilDestroy()
@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})

export class BookPageComponent {
  private getListSubscription?: Subscription;
  books: Array<Book> = []
  genres: Array<Genre> = []
  genre?: Genre[];
  book?: Book;
  constructor(private genreService: GenreService, private service: BooksService,private toastService: ToastService, private router: Router) {
    this.getGenres();
    this.getBooks();
  }
  getGenres(): void {
    this.genreService.getGenres().subscribe(genres => {
      this.genres = genres;
    })
  }

  getBooks(): void {
    this.service.getBooks().pipe(untilDestroyed(this)).subscribe((books: Book[]) => {
      this.books = books;
    });
  }
  createBook(book: Book): void {
    this.service.createBook(book).subscribe(() => { console.log('Kniha bola úspešne uložená.');
      this.getBooks();
    })
  }

  selectBookToUpdate(bookId: number): void {
    this.router.navigate(['book', bookId]);
  }


  deleteBook(bookId: number): void {
    if (window.confirm('Naozaj chcete vymazať knihu?')) {
      this.service.deleteBook(bookId).pipe(untilDestroyed(this)).subscribe(() => {
        this.toastService.success('Kniha bola úspešne zmazaná.');
        this.getBooks();
      }, () => {
        this.toastService.error('Chyba. Kniha nebola zmazaná.');
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

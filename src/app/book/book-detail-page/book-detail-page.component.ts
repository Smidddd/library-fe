import { Component } from '@angular/core';
import {Book} from "../../common/model/book.model";
import {ActivatedRoute, Router} from "@angular/router";
import {BooksService} from "../../common/service/books.service";
import {ToastService} from "angular-toastify";
import {untilDestroyed} from "@ngneat/until-destroy";
import {GenreService} from "../../common/service/genre.service";
import {Genre} from "../../common/model/genres.model";

@Component({
  selector: 'app-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.css']
})
export class BookDetailPageComponent {
  books?: Book;
  genres: Array<Genre> = []
  genre?: Genre[];
  private bookId: number | null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: BooksService,
              private toastService: ToastService,
              private genreService: GenreService) {
    this.bookId = Number(route.snapshot.paramMap.get('bookId'));
    this.getBook();
    this.getGenres();
  }
  getBook(): void {
    if (this.bookId) {
      this.service.getBook(this.bookId).pipe(untilDestroyed(this)).subscribe((books: Book) => {
        this.books = books;
      });
    }
  }
  getGenres(): void {
    this.genreService.getGenres().subscribe(genres => {
      this.genres = genres;
    })
  }
  updateBook(books: Book): void {
    this.service.updateBook(books).pipe(untilDestroyed(this)).subscribe(() => {
      this.toastService.success('Kniha bola úspešne zmenená.');
    }, () => { this.toastService.error('Chyba. Kniha nebola zmenená.'); })
  }
  cancel(): void {
    this.router.navigate(['book']);
  }
}

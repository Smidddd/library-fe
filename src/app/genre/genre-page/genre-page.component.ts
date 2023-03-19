import {Component, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Genre} from "../../common/model/genres.model";
import {HttpClient} from '@angular/common/http';
import {GenreService} from "../../common/service/genre.service";
import {Subscription} from 'rxjs';
import {UntilDestroy, untilDestroyed}
  from '@ngneat/until-destroy';
import {ToastService} from "angular-toastify";
import {Router} from "@angular/router";





export enum Menu{
    GENRE = 'GENRE'

}
@UntilDestroy()
@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.css']
})
export class GenrePageComponent{

  genres: Array<Genre> = [];
  genre?: Genre;
  private getListSubscription?: Subscription;

  menu = Menu
  actualMenu: Menu = Menu.GENRE;
  constructor(private service: GenreService,
              private toastService: ToastService,
              private router: Router) {
    this.getGenres();
  }
  ngOnDestroy(): void {
    this.getListUnsubscribe();
  }
  selectGenresToUpdate(genreId: number): void {
    this.router.navigate(['genre', genreId]);
  }
  getListUnsubscribe(): void {
    if (this.getListSubscription) {
      this.getListSubscription.unsubscribe();
      this.getListSubscription = undefined;
    }
  }

  getGenres(): void {
    this.service.getGenres().pipe(untilDestroyed(this)).subscribe((genres: Genre[]) => {
      this.genres = genres;
    });
  }

  createGenre(genre: Genre): void {
    this.service.createGenre(genre).subscribe(() => { console.log('Osoba bola úspešne uložená.');
      this.getGenres();
    })
  }

  selectGenreToUpdate(genreId: number): void {
    this.service.getGenre(genreId).subscribe((genre: Genre) => { this.genre = genre; });
  }
  updateGenre(genre: Genre): void {
    this.service.updateGenre(genre).subscribe(() => { console.log('Osoba bola úspešne zmenená.');
      this.getGenres();
    })
  }
  deleteGenre(genreId: number): void {
    if (window.confirm('Naozaj chcete vymazať osobu?')) {
      this.service.deleteGenre(genreId).pipe(untilDestroyed(this)).subscribe(() => {
        this.toastService.success('Osoba bola úspešne zmazaná.');
        this.getGenres();
      }, () => {
        this.toastService.error('Chyba. Osoba nebola zmazaná.');
      })
    }
  }
}

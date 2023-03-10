import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Genre} from "../../common/model/genres.model";
import {HttpClient} from '@angular/common/http';
import {GenreService} from "../../common/service/genre.service";



export enum Menu{
    GENRE = 'GENRE'

}
@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.css']
})
export class GenrePageComponent {

  genres: Array<Genre> = [];
  genre?: Genre;

  menu = Menu
  actualMenu: Menu = Menu.GENRE;
  constructor(private service: GenreService) {
    this.getGenres();
  }

  getGenres(): void {
    this.service.getGenres().subscribe((genres: Genre[]) => { this.genres = genres; });
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
    this.service.deleteGenre(genreId).subscribe(() => { console.log('Osoba bola úspešne zmazaná.');
      this.getGenres();
    })
  }
}

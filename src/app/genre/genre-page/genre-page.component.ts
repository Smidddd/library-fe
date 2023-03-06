import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../common/model/user.model";
import {Genre} from "../../common/model/genres.model";



export enum Menu{
    GENRE = 'GENRE'

}
@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.css']
})
export class GenrePageComponent {
  formGenres: FormGroup;

  genres: Array<Genre> = [];
  genre?: Genre;

  menu = Menu
  actualMenu: Menu = Menu.GENRE;
  constructor() {
    this.formGenres = new FormGroup({
      id: new FormControl(),
      genre: new FormControl(null, Validators.required),
    })
  }
  updateGenre(genre: Genre): void {
    const index = this.genres.findIndex(
      genre => genre.id === genre.id);
    if (index !== -1) {
      this.genres[index] = genre;
      this.genre = undefined;
    }
  }

  createGenre(genre: Genre): void {
    this.genres.push(genre);
    console.log('PERSONS:', this.genres);
  }
  selectGenreToUpdate(genreId: number): void {
    this.genre = this.genres.find(genre =>
      genre.id === genreId);
  }
  deleteGenre(genreId: number): void {
    const index = this.genres.findIndex(genre =>
      genre.id === genreId);
    if (index !== -1) { this.genres.splice(index, 1); }
  }
}

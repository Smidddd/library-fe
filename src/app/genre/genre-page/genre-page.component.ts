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
  menu = Menu
  actualMenu: Menu = Menu.GENRE;
  constructor() {
    this.formGenres = new FormGroup({
      id: new FormControl(),
      genre: new FormControl(null, Validators.required),
    })
  }

  deleteGenres(index: number): void {
    this.genres.splice(index, 1);
  }
  saveGenres(): void {
    if (this.formGenres.controls.id.value) {
      const index = this.genres.findIndex(genre => genre.id === this.formGenres.controls.id.value);
      if (index !== -1) { this.genres[index] = this.formGenres.value; }
    } else {
      this.genres.push({ id: Date.now(),
        genre: this.formGenres.controls.genre.value});
    }
    this.formGenres.reset();
  }
  editGenres(index: number): void {
    this.formGenres.setValue(this.genres[index]);
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Genre} from "../../common/model/genres.model";

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.css']
})
export class GenreFormComponent {
  formGenres: FormGroup;
  @Output()
  formCreate = new EventEmitter<Genre>();

  @Input()
  set genreData(genre: Genre | undefined) {
    if (genre) {
      this.formGenres.setValue(genre);
    }
  }

  @Output()
  formUpdate = new EventEmitter<Genre>();

  constructor() {
    this.formGenres = new FormGroup({
      id: new FormControl(),
      genre: new FormControl(null, Validators.required),
    })
  }

  saveGenre(): void {
    if (this.formGenres.valid) {
      if (this.formGenres.controls.id.value) {
        this.formUpdate.emit(
          this.prepareGenre(this.formGenres.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareGenre());
      }
      this.formGenres.reset();
    }
  }

  private prepareGenre(id?: number): Genre {
    return {
      id: id !== undefined ? id : Date.now(),
      genre: this.formGenres.controls.genre.value
    }
  }
}

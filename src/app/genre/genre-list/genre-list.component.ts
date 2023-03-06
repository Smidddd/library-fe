import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Genre} from "../../common/model/genres.model";

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent {
  @Input()
  genres: Array<Genre> = [];
  @Output()
  genreToUpdate = new EventEmitter<number>();
  @Output()
  genreToDelete = new EventEmitter<number>();
  deleteGenre(genreId: number): void {
    this.genreToDelete.emit(genreId);
  }
  updateGenres(genreId: number): void {
    this.genreToUpdate.emit(genreId);
  }
}

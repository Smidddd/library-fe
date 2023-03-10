import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Genre} from "../model/genres.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private url = 'http://localhost:8080/api/category';

  constructor(private http: HttpClient) { }
  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.url);
  }

  getGenre(genreId: number): Observable<Genre> {
    return this.http.get<Genre>(`${this.url}/${genreId}`);
  }

  createGenre(genre: Genre): Observable<number> {
    return this.http.post<number>(this.url, genre);
  }
  updateGenre(genre: Genre): Observable<Genre> {
    return this.http.put<Genre>
    (`${this.url}/${genre.id}`, genre);
  }

  deleteGenre(genreId: number): Observable<void> {
    return this.http.delete<void>
    (`${this.url}/${genreId}`);
  }
}

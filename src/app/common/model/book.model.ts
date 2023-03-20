import {Genre} from "./genres.model";

export interface Book {
  bookId: number;
  authorFirstName: string;
  authorLastName: string;
  title: string;
  isbn: number;
  count: number;
  categoryIds: Array<number>;
}
export interface BookResponse {
  bookId: number;
  authorFirstName: string;
  authorLastName: string;
  title: string;
  isbn: number;
  count: number;
  categoryIds: Array<Genre>;
}

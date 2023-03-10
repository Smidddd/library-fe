export interface Book {
  bookId: number;
  authorFirstName: string;
  authorLastName: string;
  title: string;
  isbn: number;
  count: number;

  categoryIds: Array<number>;
}

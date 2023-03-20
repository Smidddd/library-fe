import {Book} from "./book.model";
import {User} from "./user.model";

export interface Borrowing {
  id: number;
  bookId: number;
  customerId: number;
}
export interface BorrowingResponse {
  id: number;
  bookDetailDTO: Book;
  customerDetailDTO: User;
}

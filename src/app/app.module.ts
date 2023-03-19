import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserPageComponent } from './user/user-page/user-page.component';
import { GenrePageComponent } from './genre/genre-page/genre-page.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { GenreFormComponent } from './genre/genre-form/genre-form.component';
import { GenreListComponent } from './genre/genre-list/genre-list.component';
import {BookFormComponent} from "./book/book-form/book-form.component";
import {BookListComponent} from "./book/book-list/book-list.component";
import {BorrowingsFormComponent} from "./borrowings/borrowings-form/borrowings-form.component";
import {BorrowingsListComponent} from "./borrowings/borrowings-list/borrowings-list.component";
import {BookPageComponent} from "./book/book-page/book-page.component";
import {BorrowingsPageComponent} from "./borrowings/borrowings-page/borrowings-page.component";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UserService} from './common/service/user.service';
import {GenreService} from "./common/service/genre.service";
import {BooksService} from "./common/service/books.service";
import {BorrowingsService} from "./common/service/borrowings.service";
import {AngularToastifyModule, ToastService} from 'angular-toastify';
import { UserDetailPageComponent } from './user/user-detail-page/user-detail-page.component';
import { BookDetailPageComponent } from './book/book-detail-page/book-detail-page.component';
import {GenreDetailPageComponent} from "./genre/genre-detail-page/genre-detail-page.component";
@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    GenrePageComponent,
    BookPageComponent,
    BorrowingsPageComponent,
    UserFormComponent,
    UserListComponent,
    GenreFormComponent,
    GenreListComponent,
    BookFormComponent,
    BookListComponent,
    BorrowingsFormComponent,
    BorrowingsListComponent,
    UserDetailPageComponent,
    BookDetailPageComponent,
    GenreDetailPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
      AngularToastifyModule
    ],
  providers: [
    UserService,
    GenreService,
    BooksService,
    BorrowingsService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

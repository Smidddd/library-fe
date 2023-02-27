import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserPageComponent } from './user/user-page/user-page.component';
import { GenrePageComponent } from './genre/genre-page/genre-page.component';
import { BorrowingsPageComponent } from './borrowings/borrowings-page/borrowings-page.component';
import { BookPageComponent } from './book/book-page/book-page.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    
    UserPageComponent,

    GenrePageComponent,

    BorrowingsPageComponent,

    BookPageComponent,
     UserFormComponent,
     UserListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

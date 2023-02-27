import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserPageComponent} from "./user/user-page/user-page.component";
import {GenrePageComponent} from "./genre/genre-page/genre-page.component";
import {BorrowingsPageComponent} from "./borrowings/borrowings-page/borrowings-page.component";
import {BookPageComponent} from "./book/book-page/book-page.component";



const routes: Routes = [
  {
    path: 'user',
    component: UserPageComponent
  },
  {
    path: 'genre',
    component: GenrePageComponent
  },
  {
    path: 'borrowings',
    component: BorrowingsPageComponent
  },
  {
    path: 'book',
    component: BookPageComponent
  },
  {
    path: '**',
    redirectTo: 'user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

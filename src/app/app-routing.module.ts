import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserPageComponent} from "./user/user-page/user-page.component";
import {GenrePageComponent} from "./genre/genre-page/genre-page.component";
import {BorrowingsPageComponent} from "./borrowings/borrowings-page/borrowings-page.component";
import {BookPageComponent} from "./book/book-page/book-page.component";
import {UserDetailPageComponent} from "./user/user-detail-page/user-detail-page.component";
import {GenreDetailPageComponent} from "./genre/genre-detail-page/genre-detail-page.component";


const routes: Routes = [
  {
    path: 'user',
    component: UserPageComponent,
  },
  {
    path: 'user/:userId',
    component: UserDetailPageComponent
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
    path: 'genre',
    component: GenrePageComponent
  },
  {
    path: 'genre/:genreId',
    component: GenreDetailPageComponent
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

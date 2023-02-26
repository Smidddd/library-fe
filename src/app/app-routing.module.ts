import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserPageComponent} from "./user/user-page/user-page.component";
import {BookPageComponent} from "./book/book-page/book-page.component";

const routes: Routes = [
  {
    path: 'user',
    component: UserPageComponent
  },
  {
    path: 'book',
    component: BookPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserPageComponent} from "./user/user-page/user-page.component";
import {BorrowingsPageComponent} from "./borrowings/borrowings-page/borrowings-page.component";

const routes: Routes = [
  {
    path: 'user',
    component: UserPageComponent
  },
  {
    path: 'borrowings',
    component: BorrowingsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

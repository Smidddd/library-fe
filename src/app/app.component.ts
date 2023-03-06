
import {Component} from '@angular/core';
import {Router} from '@angular/router';
export enum Menu{
  BOOKS = 'BOOKS',
  USERS = 'USERS',
  BORROWINGS = 'BORROWINGS',
  GENRE = 'GENRE'

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  menu = Menu;
  constructor(private router: Router) {}

  changeMenu(menuItem: Menu): void {
    switch (menuItem) {
      case Menu.USERS: this.router.navigate(['user']); break;
      case Menu.BOOKS: this.router.navigate(['book']); break;
      case Menu.GENRE: this.router.navigate(['genre']); break;
      case Menu.BORROWINGS: this.router.navigate(['borrowing']); break;
    }
  }
}




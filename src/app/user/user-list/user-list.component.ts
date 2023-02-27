import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../common/model/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input()
  persons: Array<User> = []; // NOVE

  @Output()
  personToUpdate = new EventEmitter<number>();
  updatePerson(userId: number): void { // NOVE
    this.personToUpdate.emit(userId);
  }
  @Output()
  personToDelete = new EventEmitter<number>();
  deletePerson(userId: number): void {
    this.personToDelete.emit(userId);
  }
}

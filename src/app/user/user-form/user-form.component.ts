import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../common/model/user.model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output()
  formCreate = new EventEmitter<User>();
  formGroup: FormGroup;
  @Output()
  formUpdate = new EventEmitter<User>();
  @Output()
  formCancel = new EventEmitter<void>();
  constructor() {
    this.formGroup = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      emailContact: new FormControl(null, Validators.required)
    })
  }
  @Input()
  set personData(person: User | undefined) {
    if (person) {
      this.formGroup.setValue(person);
    }
  }
  savePerson(): void {
    if (this.formGroup.valid) {
      if (this.formGroup.controls.id.value) {
        this.formUpdate.emit(
          this.prepareUser(this.formGroup.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareUser());
      }
    }
  }
  private prepareUser(id?: number): User {
    return {
      id: id !== undefined ? id : Date.now(),
      firstName: this.formGroup.controls.firstName.value,
      lastName: this.formGroup.controls.lastName.value,
      emailContact: this.formGroup.controls.emailContact.value,
    };
  }

}

import { Component } from '@angular/core';
import {User} from "../../common/model/user.model";
import {HttpClient} from '@angular/common/http';
import {UserService} from "../../common/service/user.service";
import {Genre} from "../../common/model/genres.model";


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  persons: Array<User> = [];
  person?: User;

  constructor(private service: UserService) {
    this.getPersons();
  }

  getPersons(): void{
    this.service.getUsers().subscribe((persons: User[])=>{
      this.persons = persons;
    })
  }
  /*createPerson(person: User): void {
    this.persons.push(person);
    console.log('PERSONS:', this.persons);
  }*/
  createPerson(person: User): void {
    this.service.createPerson(person).subscribe(() => { console.log('Osoba bola úspešne uložená.');
      this.getPersons();
    })
  }
  updatePerson(person: User): void {
    this.service.updateUser(person).subscribe(person => {
      console.log('Osoba bola úspešne zmenená.');
      this.getPersons();
    })
  }
  selectPersonToUpdate(personId: number): void {
    this.service.getUser(personId).subscribe((person: User) => {
      this.person = person;
    });
  }
  deletePerson(personId: number): void {
    this.service.deleteUser(personId).subscribe(() => {
      console.log('Osoba bola úspešne zmazaná.');
      this.getPersons();
    })
  }
}

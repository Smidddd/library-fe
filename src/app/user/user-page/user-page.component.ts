import {Component, OnDestroy} from '@angular/core';
import {User} from "../../common/model/user.model";
import {HttpClient} from '@angular/common/http';
import {UserService} from "../../common/service/user.service";
import {Genre} from "../../common/model/genres.model";
import {Subscription} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {ToastService} from "angular-toastify";
import {Router} from "@angular/router";


@UntilDestroy()
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent{
  private getListSubscription?: Subscription;
  persons: Array<User> = [];
  person?: User;

  constructor(private service: UserService,
              private toastService: ToastService,
              private router: Router) {
    this.getPersons();
  }
  ngOnDestroy(): void {
    this.getListUnsubscribe();
  }
  getListUnsubscribe(): void {
    if (this.getListSubscription) {
      this.getListSubscription.unsubscribe();
      this.getListSubscription = undefined;
    }
  }
  getPersons(): void {
    this.service.getUsers().pipe(untilDestroyed(this)).subscribe((persons: User[]) => {
      this.persons = persons;
    });
  }
  /*
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
    this.router.navigate(['user', personId]);
  }
  deletePerson(personId: number): void {
    if (window.confirm('Naozaj chcete vymazať osobu?')) {
      this.service.deleteUser(personId).pipe(untilDestroyed(this)).subscribe(() => {
        this.toastService.success('Osoba bola úspešne zmazaná.');
        this.getPersons();
      }, () => {
        this.toastService.error('Chyba. Osoba nebola zmazaná.');
      })
    }
  }

}

import { Injectable } from '@angular/core';
import {User} from '../entity/User';
import users from "../shared/List-users.json";
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  userTab: User[] = [
    {"_id": 0, "_nom": "hazem", "_prenom": "gdara", "_nombre_enfants": 4},
    {"_id": 1, "_nom": "sof", "_prenom": "gharbi", "_nombre_enfants": 4},
    {"_id": 2, "_nom": "hamza", "_prenom": "auinti", "_nombre_enfants": 4},
    {"_id": 3, "_nom": "houssem", "_prenom": "auinti", "_nombre_enfants": 4}
  ];

  constructor(private _http: HttpClient) { }

  getAllUsers () {
    return this.userTab;
  }

  deleteUser(user: User) {
    let index: number = -1;
    for (let i = 0; i < this.userTab.length; i++) {
      if ( this.userTab[i]._id === user._id)
      {
        index = i;
      }
    }
    console.log("index" + index);
    this.userTab.splice(index, 1);
  }

  changeNbrEnfant(value: string, id: number) {
    let index: number = -1;
    for (let i = 0; i < this.userTab.length; i++) {
      if ( this.userTab[i]._id === id)
      {
        index = i;
      }
    }

    this.userTab[index]._nombre_enfants = +value;
    console.log(this.userTab[index]);

  }

  ClickCards(user: User) {
    return user;
  }

  addUser(nom: string, prenom: string, nbr: string) {

    let user: User = new User(+this.userTab.length, nom, prenom, +nbr);
    this.userTab.push(user);
    $("#addUserModal").modal('hide');
  }
}

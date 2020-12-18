import { Component, OnInit } from '@angular/core';
import {User} from '../entity/User';
import {ApiUsersService} from '../services/api-users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})

export class UserCardComponent implements OnInit {
  // nbr_enf: number;
  userTab: User[];
  nbrE: any;
  constructor(private userService: ApiUsersService) { }

  ngOnInit(): void {
    this.userTab = this.userService.getAllUsers();
    console.log(this.userTab);
  }

  onDeleteUser(user: User) {
    this.userService.deleteUser(user);
  }

  onchangeNbrEnfant(nbr: HTMLInputElement, id: number) {
    // console.log(nbr.value + "******** id: " + id);
    this.userService.changeNbrEnfant(nbr.value, id);
  }

  onClickCards(user: User) {
    this.userService.ClickCards(user)
  }

  onAddUser(nom: HTMLInputElement, prenom: HTMLInputElement, nbr: HTMLInputElement) {
    this.userService.addUser(nom.value, prenom.value, nbr.value)
  }
}

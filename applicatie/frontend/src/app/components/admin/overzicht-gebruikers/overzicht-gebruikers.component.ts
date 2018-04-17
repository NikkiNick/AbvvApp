import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../auth/authentication.service';
import { User } from '../../../classes/user';

@Component({
  selector: 'app-overzicht-gebruikers',
  templateUrl: './overzicht-gebruikers.component.html',
  styleUrls: ['./overzicht-gebruikers.component.css']
})
export class OverzichtGebruikersComponent implements OnInit {

  private _users: User[];
  private _deleteComplete: Boolean = false;

  constructor(private authService: AuthenticationService) { 

  }

  ngOnInit() { 
    this.authService.users.subscribe(users => this._users = users);
  }

  get users(): User[]{
    return this._users;
  }
  get isEmpty(): boolean{
    if(this._users == null || this._users.length == 0){
      return true;
    }
    return false; 
  }

  verwijderGebruiker(id: string){
    if(window.confirm("Ben je zeker dat u deze gebruiker wil verwijderen?")){
      if(window.confirm("Geen weg meer terug hierna...")){
        this.authService.verwijderUser(id).subscribe(val => {
          if(val == true){
            this._deleteComplete = true;
            this._users = this._users.filter(val => id !== val.id)
          }
        });
      }
    }  
  }
  get isDeleted(): Boolean{
    return this._deleteComplete;
  }
  closeDeletedMessage(){
    this._deleteComplete = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../auth/authentication.service';
import { User } from '../../../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overzicht-gebruikers',
  templateUrl: './overzicht-gebruikers.component.html',
  styleUrls: ['./overzicht-gebruikers.component.css']
})
export class OverzichtGebruikersComponent implements OnInit {

  private _users: User[];
  private _deleteComplete: Boolean = false;
  private _activeerComplete: Boolean = false;
  private _deactiveerComplete: Boolean = false;

  constructor(private authService: AuthenticationService, private router: Router) { 

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
  activeerGebruiker(id: string){
    this.authService.activeerUser(id).subscribe(
      (val: any) => {
        if(val){
          this._activeerComplete = true;
        }
      }
    );
  }
  deactiveerGebruiker(id: string){
    this.authService.deactiveerUser(id).subscribe(
      (val: any) => {
        if(val){
          this._deactiveerComplete = true;
        }
      }
    );
  }
  get isDeleted(): Boolean{
    return this._deleteComplete;
  }
  get isActivated(): Boolean{
    return this._activeerComplete;
  }
  get isDeActivated(): Boolean{
    return this._deactiveerComplete;
  }
  closeMessage(){
    this._deleteComplete = false;
    this._activeerComplete = false;
    this._deactiveerComplete = false;
  }
}

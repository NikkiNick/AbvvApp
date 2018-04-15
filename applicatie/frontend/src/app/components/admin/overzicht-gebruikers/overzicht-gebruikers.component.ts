import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../auth/authentication.service';

@Component({
  selector: 'app-overzicht-gebruikers',
  templateUrl: './overzicht-gebruikers.component.html',
  styleUrls: ['./overzicht-gebruikers.component.css']
})
export class OverzichtGebruikersComponent implements OnInit {

  constructor(private authService: AuthenticationService) { 

  }

  ngOnInit() {
  }

}

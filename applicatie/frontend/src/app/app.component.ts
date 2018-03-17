import { Component } from '@angular/core';
import { Nieuwsbericht } from './classes/nieuwsbericht';
import { NieuwsDataService } from './services/nieuws-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NieuwsDataService]
})
export class AppComponent {

  constructor(private _nieuwsDataService: NieuwsDataService){

  }
}

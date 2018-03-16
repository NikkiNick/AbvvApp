import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Nieuwsbericht } from '../../../classes/nieuwsbericht';

@Component({
  selector: 'app-nieuws-toevoegen',
  templateUrl: './nieuws-toevoegen.component.html',
  styleUrls: ['./nieuws-toevoegen.component.css']
})
export class NieuwsToevoegenComponent implements OnInit {


  @Output() public nieuwsbericht = new EventEmitter<Nieuwsbericht>();

  constructor(){

  }
  ngOnInit(){

  }

  voegNieuwsberichtToe(titel: string, bericht: string) : boolean {
    const nbericht = new Nieuwsbericht(titel, bericht, 'Nick');
    this.nieuwsbericht.emit(nbericht);
    return false;
  }
}

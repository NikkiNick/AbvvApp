import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Nieuwsbericht } from '../../../classes/nieuwsbericht';
import { NieuwsDataService } from '../../../services/nieuws-data.service';


@Component({
  selector: 'app-nieuws-toevoegen',
  templateUrl: './nieuws-toevoegen.component.html',
  styleUrls: ['./nieuws-toevoegen.component.css'],
  providers: []
})
export class NieuwsToevoegenComponent implements OnInit {


  @Output() public nieuwsbericht = new EventEmitter<Nieuwsbericht>();

  constructor(private _nieuwsDataService: NieuwsDataService){
    
  }
  ngOnInit(){

  }

  voegNieuwsberichtToe(titel: string, bericht: string) : boolean {
    const nbericht = new Nieuwsbericht(titel, bericht, 'Nick');
    this.nieuwsbericht.emit(nbericht);
    return false;
  }
}

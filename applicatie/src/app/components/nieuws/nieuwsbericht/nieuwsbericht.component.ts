import { Component, OnInit, Input, Output } from '@angular/core';
import { Nieuwsbericht } from '../../../classes/nieuwsbericht';
import { NieuwsDataService } from '../../../services/nieuws-data.service';

@Component({
  selector: 'app-nieuwsbericht',
  templateUrl: './nieuwsbericht.component.html',
  styleUrls: ['./nieuwsbericht.component.css'],
  providers: []
})
export class NieuwsberichtComponent implements OnInit {

  @Input() public nieuwsbericht: Nieuwsbericht;

  constructor(private _nieuwsDataService: NieuwsDataService) {
    
   }

  ngOnInit() {
  }
  verwijderNieuwsbericht(nieuwsbericht: Nieuwsbericht){
    let id = nieuwsbericht.id;
    this._nieuwsDataService.verwijderNieuwsbericht(id);
  }
}

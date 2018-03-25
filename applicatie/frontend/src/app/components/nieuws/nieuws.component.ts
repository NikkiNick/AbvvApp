import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Nieuwsbericht } from '../../classes/nieuwsbericht';
import { NieuwsDataService } from '../../services/nieuws-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-nieuws',
  templateUrl: './nieuws.component.html',
  styleUrls: ['./nieuws.component.css'],
  providers: []
})
export class NieuwsComponent implements OnInit {

  private _nieuwsberichten: Nieuwsbericht[];


  constructor(private _nieuwsDataService: NieuwsDataService){
    
  }
  ngOnInit() {
    this._nieuwsDataService.nieuwsBerichten.subscribe(items => this._nieuwsberichten = items);
  }
  get isEmpty(): boolean{
    if(this._nieuwsberichten == null){
      return true;
    }
    else{ 
      if(this._nieuwsberichten.length == 0){
        return true;
      }
    }
    return false;
   
  }
  get nieuwsBerichten(){
    return this._nieuwsberichten;
  }
  verwijderNieuwsbericht(nieuwsbericht){
    if(window.confirm("Ben je zeker dat u dit nieuwbericht wil verwijderen?")){
      if(window.confirm("Geen weg meer terug hierna...")){
        this._nieuwsDataService.verwijderNieuwsbericht(nieuwsbericht).subscribe(
          item => (this._nieuwsberichten = this._nieuwsberichten.filter(val => item.id !== val.id))  
        );
      }
    }
  }

}

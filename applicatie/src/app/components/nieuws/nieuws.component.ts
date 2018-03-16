import { Component, OnInit, Input } from '@angular/core';
import { Nieuwsbericht } from '../../classes/nieuwsbericht';
import { NieuwsDataService } from '../../services/nieuws-data.service';

@Component({
  selector: 'app-nieuws',
  templateUrl: './nieuws.component.html',
  styleUrls: ['./nieuws.component.css'],
  providers: []
})
export class NieuwsComponent implements OnInit {

  private _toevoegenStatus = false;
  private _isEmpty: boolean;

  constructor(private _nieuwsDataService: NieuwsDataService){
    this._isEmpty = this._nieuwsDataService.isEmpty();
  }
  get isEmpty(): boolean{
    return this._isEmpty;
   
  }
  get nieuwsBerichten(): Nieuwsbericht[]{
    return this._nieuwsDataService.nieuwsBerichten;
  }
  voegNieuwsberichtToe(nieuwsbericht){

    this._nieuwsDataService.voegNieuwsberichtToe(nieuwsbericht);
  }
  verwijderNieuwsbericht(nieuwsbericht){
    this._nieuwsDataService.verwijderNieuwsbericht(nieuwsbericht);
  }

  ngOnInit() {
    document.getElementById("form").style.display = "none";
  }
  toggleForm(){
    if(this._toevoegenStatus == false){
      document.getElementById("form").style.display = "block";
      document.getElementById("formToggle").textContent =  "Annuleer toevoegen";
      this._toevoegenStatus = true;
    } else{
      document.getElementById("form").style.display = "none";
      document.getElementById("formToggle").textContent =  "Nieuwsbericht toevoegen";
      this._toevoegenStatus =false;
    }
  }
}

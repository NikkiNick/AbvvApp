import { Component, OnInit, Input } from '@angular/core';
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
  private _toevoegenStatus = false;
  private _isEmpty: boolean;

  constructor(private _nieuwsDataService: NieuwsDataService){
    
  }
  ngOnInit() {
    this._nieuwsDataService.nieuwsBerichten.subscribe(items => this._nieuwsberichten = items);
    document.getElementById("form").style.display = "none";
    if(this._nieuwsberichten.length == 0){
      this._isEmpty = true;
    }
    else{ this._isEmpty = false;}
  }
  get isEmpty(): boolean{
    return this._isEmpty;
   
  }
  get nieuwsBerichten(){
    return this._nieuwsberichten;
  }
  voegNieuwsberichtToe(nieuwsbericht){
    this._nieuwsDataService.voegNieuwsberichtToe(nieuwsbericht).subscribe(item => this._nieuwsberichten.push(item));
  }
  verwijderNieuwsbericht(nieuwsbericht: Nieuwsbericht){
    this._nieuwsDataService.verwijderNieuwsbericht(nieuwsbericht).subscribe(
      item => (this._nieuwsberichten = this._nieuwsberichten.filter(val => item.id !== val.id)),
      (error: HttpErrorResponse) => {
        ///this.errorMsg = 'Error ${error.status} while removing nieuwsbericht for ${nieuwsbericht.titel}: ${error.error}';
      }
      
    );
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

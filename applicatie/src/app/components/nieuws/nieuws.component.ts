import { Component, OnInit } from '@angular/core';
import { Nieuwsbericht } from '../../classes/nieuwsbericht';

@Component({
  selector: 'app-nieuws',
  templateUrl: './nieuws.component.html',
  styleUrls: ['./nieuws.component.css']
})
export class NieuwsComponent implements OnInit {

  private _nieuwsberichten = new Array<Nieuwsbericht>();
  private _toevoegenStatus = false;

  constructor() { 
    let nieuwsbericht1: Nieuwsbericht = new Nieuwsbericht("Titel nieuwsbericht 1", "Dit is de inhoud van nieuwsbericht 1","Nick");
    let nieuwsbericht2: Nieuwsbericht = new Nieuwsbericht("Titel nieuwsbericht 2", "Dit is de inhoud van nieuwsbericht 2","Nick");
    this.voegNieuwsBerichtToe(nieuwsbericht1);
    this.voegNieuwsBerichtToe(nieuwsbericht2);
  }

  ngOnInit() {
    document.getElementById("form").style.display = "none";
  }

  get nieuwsBerichten(): Nieuwsbericht[]{
    return this._nieuwsberichten;
  }
  voegNieuwsBerichtToe(nieuwsbericht){
    this._nieuwsberichten.push(nieuwsbericht);
    console.log(nieuwsbericht+'\nTOEGEVOEGD');
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

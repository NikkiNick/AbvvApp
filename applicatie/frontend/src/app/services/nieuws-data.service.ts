import { Nieuwsbericht } from '../classes/nieuwsbericht';
import { Injectable } from '@angular/core';

@Injectable()
export class NieuwsDataService {

  private _nieuwsberichten = new Array<Nieuwsbericht>();

  constructor() {
    let nieuwsbericht1 = new Nieuwsbericht(0, "Titel nieuwsbericht 1", "Dit is de inhoud van nieuwsbericht 1","Nick");
    let nieuwsbericht2 = new Nieuwsbericht(1, "Titel nieuwsbericht 2", "Dit is de inhoud van nieuwsbericht 2","Nick");
    this.voegNieuwsberichtToe(nieuwsbericht1);
    this.voegNieuwsberichtToe(nieuwsbericht2);
  }

  get nieuwsBerichten(): Nieuwsbericht[]{
    return this._nieuwsberichten;
  }
  voegNieuwsberichtToe(nieuwsbericht){
    this._nieuwsberichten.push(nieuwsbericht);
  }
  verwijderNieuwsbericht(id){
    for(let i = 0; i < this._nieuwsberichten.length; i++){
      if(this._nieuwsberichten[i].id == id){
        this._nieuwsberichten.splice(i, 1);
      }
    }
  }
  isEmpty(): boolean{
    if(this._nieuwsberichten.length == 0){
      return true;
    }
    return false;
  }

}

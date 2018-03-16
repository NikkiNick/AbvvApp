import { Nieuwsbericht } from '../classes/nieuwsbericht';
import { Injectable } from '@angular/core';

@Injectable()
export class NieuwsDataService {

  private _nieuwsberichten = new Array<Nieuwsbericht>();

  constructor() { 

    let nieuwsbericht1: Nieuwsbericht = new Nieuwsbericht("Titel nieuwsbericht 1", "Dit is de inhoud van nieuwsbericht 1","Nick");
    this.voegNieuwsBerichtToe(nieuwsbericht1);

  }

  get getNieuwsBerichten(): Nieuwsbericht[]{
    return this._nieuwsberichten;
  }
  voegNieuwsBerichtToe(nieuwsbericht){
    this._nieuwsberichten.push(nieuwsbericht);
  }
}

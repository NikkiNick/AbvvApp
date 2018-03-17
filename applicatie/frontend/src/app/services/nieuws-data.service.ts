import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Nieuwsbericht } from '../classes/nieuwsbericht';
import { Injectable } from '@angular/core';

@Injectable()
export class NieuwsDataService {

  private readonly _nieuwsApiUrl = "/API/nieuwsberichten";

  constructor(private http: HttpClient) {
  }

  get nieuwsBerichten(): Observable<Nieuwsbericht[]>{
    return this.http
              .get(this._nieuwsApiUrl)
              .pipe(
                map((list: any[]): Nieuwsbericht[] =>
                        list.map(item => new Nieuwsbericht(item.titel, item.bericht, item.toegevoegdDoor))
                )
              );
  }
  voegNieuwsberichtToe(nieuwsbericht): Observable<Nieuwsbericht> {
    return this.http
      .post(this._nieuwsApiUrl, nieuwsbericht)
      .pipe(
        map(
          (item: any): Nieuwsbericht =>
            new Nieuwsbericht(item.titel, item.bericht, item.toegevoegdDoor)
        )
      );
  }

  verwijderNieuwsbericht(id){
    //
  }
  isEmpty(): boolean{
    return false;
  }

}
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Nieuwsbericht } from '../classes/nieuwsbericht';
import { Injectable } from '@angular/core';

@Injectable()
export class NieuwsDataService {

  private readonly _nieuwsApiUrl = "/API/nieuws/";

  constructor(private http: HttpClient) {
  }

  get nieuwsBerichten(): Observable<Nieuwsbericht[]>{
    return this.http
              .get(this._nieuwsApiUrl)
              .pipe(
                map((list: any[]): Nieuwsbericht[] =>
                        list.map(Nieuwsbericht.fromJSON)
                )
              );
  }

  getNieuwsbericht(id: string): Observable<Nieuwsbericht>{
    return this.http
      .get(`${this._nieuwsApiUrl}/${id}`)
      .pipe(map(Nieuwsbericht.fromJSON));
  }
  voegNieuwsberichtToe(nieuwsbericht): Observable<Nieuwsbericht> {
    return this.http
      .post(this._nieuwsApiUrl, nieuwsbericht)
      .pipe(map(Nieuwsbericht.fromJSON));
  }

  verwijderNieuwsbericht(nieuwsbericht: Nieuwsbericht): Observable<Nieuwsbericht>{
    return this.http
    .delete(`${this._nieuwsApiUrl}verwijder/${nieuwsbericht.id}`)
    .pipe(map(Nieuwsbericht.fromJSON));
  }
  pasNieuwsberichtAan(nieuwsbericht: Nieuwsbericht): Observable<Nieuwsbericht>{
    return this.http
    .put(`${this._nieuwsApiUrl}wijzig/${nieuwsbericht.id}`, nieuwsbericht)
    .pipe(map(Nieuwsbericht.fromJSON));
  }
  isEmpty(): boolean{
    return false;
  }

}
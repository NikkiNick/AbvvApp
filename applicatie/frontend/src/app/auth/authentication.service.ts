import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../classes/user';

@Injectable()
export class AuthenticationService {

  public _redirectUrl: string;
  private readonly _tokenKey = 'currentUser';
  private _url = '/API/gebruiker';
  private _user$: BehaviorSubject<string>;
  
  constructor(private http: HttpClient) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
      }
    }
    this._user$ = new BehaviorSubject<string>(parsedToken && parsedToken.username);
  } 

  get redirectUrl(): string{
    return this._redirectUrl;
  }
  get user$(): BehaviorSubject<string> {
    return this._user$;
  } 
  get token(): string {
    const localToken = localStorage.getItem(this._tokenKey);
    return !!localToken ? localToken : '';
  } 
  set redirectUrl(value){
    this._redirectUrl = value;
  }
  isUserAdmin(): boolean{
    if(this._user$.getValue()){
      const token = localStorage.getItem("currentUser");
      const payload = parseJwt(token);
      return payload.admin;
    }
    return false;
  }
  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/login`, { username, password }).pipe(
      map((res: any) => {
        const token = res.token;
        if (token) {
          localStorage.setItem(this._tokenKey, token);
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
      })
    );
  }
  register(username: string, naam: string, voornaam: string, email: string, personeelsnummer: number, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/registreer`, { username, naam, voornaam, email, personeelsnummer, password }).pipe(
      map((res: any) => {
        const token = res.token;
        if (token) {
          localStorage.setItem(this._tokenKey, token);
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
      })
    );
  }
  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem('currentUser');
      setTimeout(() => this._user$.next(null));
    }
  }
  checkUserNameAvailability(username: string): Observable<boolean> {
    return this.http.post(`${this._url}/checkusername`, { username }).pipe(
      map((item: any) => {
        if (item.username === 'alreadyexists') {
          return false;
        } else {
          return true;
        }
      })
    );
  }
  checkEmailAvailability(email: string): Observable<boolean> {
    return this.http.post(`${this._url}/checkemail`, { email }).pipe(
      map((item: any) => {
        if (item.email === 'alreadyexists') {
          return false;
        } else {
          return true;
        }
      })
    );
  }
  checkPersoneelsnummerAvailability(personeelsnummer: Number): Observable<boolean> {
    return this.http.post(`${this._url}/checkpersoneelsnummer`, { personeelsnummer }).pipe(
      map((item: any) => {
        if (item.personeelsnummer === 'alreadyexists') {
          return false;
        } else {
          return true;
        }
      })
    );
  }
  getUser(username: string){
      return this.http
        .get(`${this._url}/${username}`)
        .pipe(map(User.fromJSON));
  }
  get users(): Observable<User[]>{
    return this.http
              .get(this._url)
              .pipe(
                map((list: any[]): User[] =>
                        list.map(User.fromJSON)
                )
              );
  }
  verwijderUser(id: String): Observable<boolean>{
    return this.http
    .delete(`${this._url}/verwijder/${id}`)
    .pipe(map((val: any) => {
      return val.deleted;
    }));
  }

}

function parseJwt(token) {
  if (!token) {
    return null;
  }
  const base64Token = token.split('.')[1];
  const base64 = base64Token.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}
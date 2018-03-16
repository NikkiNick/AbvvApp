export class User {
    private _naam: string;
    private _voornaam: string;
    private _email: string;

    ///CONSTRUCTOR
    constructor(naam: string, voornaam: string, email:string){
        this._naam = naam;
        this._voornaam = voornaam;
        this._email = email;
    }

    ///GETTERS
    get naam(): string{
        return this._naam;
    }
    get voornaam(): string{
        return this._voornaam;
    }
    get email(): string{
        return this._email;
    }
}

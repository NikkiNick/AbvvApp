export class User {
    private _username: string;
    private _naam: string;
    private _voornaam: string;
    private _email: string;
    private _personeelsnummer: Number;
    private _rechten: string;

    ///CONSTRUCTOR
    constructor(username: string, naam: string, voornaam: string, email:string, personeelsnummer: Number, rechten: string){
        this._username = username;
        this._naam = naam;
        this._voornaam = voornaam;
        this._email = email;
        this._personeelsnummer = personeelsnummer;
        this._rechten = rechten;
    }

    ///GETTERS
    get username(): string{
        return this._username;
    }
    get naam(): string{
        return this._naam;
    }
    get voornaam(): string{
        return this._voornaam;
    }
    get email(): string{
        return this._email;
    }
    get personeelsnummer(): Number{
        return this._personeelsnummer;
    }
    get rechten(): string{
        return this._rechten;
    }
    static fromJSON(json: any): User {
        let user = new User(json.username, json.naam, json.voornaam, json.email, json.personeelsnummer, json.rechten);
        return user;
    }
}

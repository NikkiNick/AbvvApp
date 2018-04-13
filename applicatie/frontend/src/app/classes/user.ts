export class User {
    private _username: string;
    private _naam: string;
    private _voornaam: string;
    private _email: string;
    private _personeelsnummer: string;

    ///CONSTRUCTOR
    constructor(username: string, naam: string, voornaam: string, email:string, personeelsnummer: string){
        this._username = username;
        this._naam = naam;
        this._voornaam = voornaam;
        this._email = email;
        this._personeelsnummer = personeelsnummer;
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
    get personeelsnummer(): string{
        return this._personeelsnummer;
    }
    static fromJSON(json: any): User {
        let user = new User(json.username, json.naam, json.voornaam, json.email, json.personeelsnummer);
        return user;
    }
}

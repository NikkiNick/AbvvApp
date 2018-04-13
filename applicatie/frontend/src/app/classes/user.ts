export class User {
    private _username: string;
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
    static fromJSON(json: any): User {
        let user = new User(json.naam, json.voornaam, json.email);
        user._username = json.username;
        return user;
    }
}

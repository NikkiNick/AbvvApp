import { User } from '../classes/user';
export class Nieuwsbericht {
    private _titel: string;
    private _bericht: string;
    private _toegevoegdOp: Date;
    private _toegevoegdDoor: string;

    ///CONSTRUCTOR
    constructor(titel: string, bericht: string, user: string){
        this._titel = titel;
        this._bericht = bericht;
        this._toegevoegdOp = new Date();
        this._toegevoegdDoor = user;
    }

    ///GETTERS
    get titel(): string{
        return this._titel;
    }
    get bericht(): string{
        return this._bericht;
    }
    get toegevoegdOp(): Date{
        return this._toegevoegdOp;
    }
    get toegevoegdDoor(): string{
        return this._toegevoegdDoor;
    }

    toJSON(){
        return{
            titel: this._titel,
            bericht: this._bericht,
            toegevoegdOp: this._toegevoegdOp,
            toegevoegdDoor: this._toegevoegdDoor
        };
    }

}

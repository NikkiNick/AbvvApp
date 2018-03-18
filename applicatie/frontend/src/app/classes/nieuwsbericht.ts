import { User } from '../classes/user';
export class Nieuwsbericht {

    private _id: Number;
    private _titel: string;
    private _bericht: string;
    private _toegevoegdOp: Date;
    private _toegevoegdDoor: string;

    ///CONSTRUCTOR
    constructor(id: Number, titel: string, bericht: string, user: string){
        this._id = id;
        this._titel = titel;
        this._bericht = bericht;
        this._toegevoegdOp = new Date();
        this._toegevoegdDoor = user;
    }

    ///GETTERS
    get id(): Number{
        return this._id;
    }
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
        return {
            id: this._id,
            titel: this._titel,
            bericht: this._bericht,
            toegevoegdOp: this._toegevoegdOp,
            toegevoegdDoor: this._toegevoegdDoor
        }
    }

}

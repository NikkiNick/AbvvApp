import { Injectable } from "@angular/core";
import { Nieuwsbericht } from "../../classes/nieuwsbericht";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { NieuwsDataService } from "./service/nieuws-data.service";

@Injectable()
export class NieuwsberichtResolver implements Resolve<Nieuwsbericht> {
    constructor(private nds: NieuwsDataService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Nieuwsbericht> {
        return this.nds.getNieuwsbericht(route.params['nieuwsberichtID']);
    }
}

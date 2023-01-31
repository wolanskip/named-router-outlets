import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class LookupResolver implements Resolve<Observable<object>> {
    constructor() { }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object> {

        const lookupCodes = {
            "states": ["MI"]
        };

        return of(lookupCodes);
        
    }

}

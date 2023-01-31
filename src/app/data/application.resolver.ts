import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ApplicationResolver implements Resolve<Observable<object>> {
    constructor() { }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object> {

        const applicationTextblock = {
            formTemplateJson: 'prototypeAlpha',

            signatures: [
                {
                    name: "Contact Information",
                    description: "Enter your name and phone number on this form."
                }, 
                {
                    name: "Address Information",
                    description: "Enter your address on this form."
                }
            ]
        };

        return of(applicationTextblock);
        
    }

}

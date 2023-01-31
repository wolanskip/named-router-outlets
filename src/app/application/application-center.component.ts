import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-center',
  template: `
    <h2>
        application Center 
    </h2>
    <!-- <pre> {{textBlock | json}} </pre>  -->

    <ul>
        <li *ngFor="let signature of textBlock.signatures; let i = index">
            <a [routerLink]="[{outlets: {step: [i]}}]"> step {{i}} - {{signature.name}} </a>
        </li>
    </ul>
   
    <router-outlet name="step" (activate)="onActivate($event)"></router-outlet>
    <router-outlet></router-outlet>

    <button (click)="next()">Next</button>
    <button (click)="previous()">Previous</button>
  `,
  styles: [
  ]
})
export class ApplicationCenterComponent implements OnInit { 


    public currentStep = 0;
    public textBlock: any = {signatures: []};

    constructor(private route: ActivatedRoute, private router: Router) {
        this.textBlock = route.snapshot.data["applicationData"];
    }

    ngOnInit(): void {
    }

    public onActivate(componentRef: any) {
        console.log(componentRef);
        this.currentStep = +componentRef.route.snapshot.params["stepId"];
        
        componentRef.route.params.subscribe((newItem: Params) => { 
            this.currentStep = +newItem["stepId"];
        });

        // use component ref to ... idk... send data back?? via interface?
        // use the onDeactivate as a destroy
        // but need something for the route has changed?
    }

    public next() {
        this.router.navigate(['application', '5', { outlets: { step: [this.currentStep+1] }}]);
    }

    public previous() {
        this.router.navigate([{ outlets: { step: [this.currentStep-1]}}], { relativeTo: this.route})
    }
}

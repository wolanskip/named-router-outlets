import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-content',
  template: `
    <p>
      Step #{{stepNumber}}!<br/>
      <i>ApplicationContentComponent</i>

      Here, I would be a dispatch component of sorts and render some stuff. 
    </p>
  `,
  styles: [
  ]
})
export class ApplicationContentComponent implements OnInit {

  public stepNumber: string = "?";

  constructor(public route: ActivatedRoute, private router: Router) {
    // just get the initial step number as POC
    this.stepNumber = route.snapshot.params["stepId"];
  }

  ngOnInit(): void {
    this.route.params.subscribe((newItem: Params) => {
      // the component isn't destroyed on route; it's reused
      this.stepNumber = newItem["stepId"];
    });
  }

}

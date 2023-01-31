import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application',
  template: `
    <h2>
      application #{{applicationId}} 
    </h2>
    <pre> {{applicationData | json}} </pre>
    <router-outlet name='step'></router-outlet>
  `,
  styles: [
  ]
})
export class ApplicationComponent implements OnInit {

  public applicationId: string = "?";
  public applicationData: any;

  constructor(public router: Router, private route: ActivatedRoute) {
    this.applicationId = this.route.snapshot.params["id"];
    this.applicationData = this.route.snapshot.data["applicationData"];
    console.log(this.router.config);
  }

  ngOnInit(): void {
  }

}

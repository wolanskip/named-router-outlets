import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: "app-user-sidebar",
  template: `
    <a [routerLink]="'application/5'">Step 1a</a>
    <a [routerLink]="['application', '5', {outlets: {step: ['0']} }]">Step 1b</a>

    <ul>
      <li *ngFor="let user of users$ | async">
        <a
          [routerLink]="getRouterLink(user)"
          class="link primary"
        >
          <h4 class="mat-title">{{ user.name }}</h4>
        </a>
        <p class="mat-caption">{{ user.email }}</p>
      </li>
    </ul>
  `,
  styles: [
    `
      .link {
        display: block;
      }
      .mat-title {
        margin-bottom: 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSidebarComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.users$ = this.http.get<User[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
  }

  public getRouterLink(user: any): any {
    return ['', {outlets: {details: ['user', user.id] } }];
  }
}

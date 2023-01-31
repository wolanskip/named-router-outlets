import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <header>
      <mat-toolbar color="primary">
        <a
          mat-stroked-button
          routerLinkActive="active"
          routerLink="users"
          class="nav-link"
          >Users</a
        >
        <a mat-stroked-button routerLinkActive="active" routerLink="photos"
          >Photos</a
        >

        <a mat-stroked-button routerLinkActive="active" routerLink="application/5"
          >Application</a
        >
      </mat-toolbar>
    </header>
    <main class="content">
      
        <app-user-sidebar></app-user-sidebar>
      
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      .content {
        min-height: calc(100vh - 64px);
        display: flex;
      }
      .active {
        border-color: #fff;
      }
      a {
        margin-left: 15px;
      }
    `,
  ],
})
export class AppComponent {
  isButtonVisible = false;
}

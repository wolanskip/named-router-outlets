import { ApplicationCenterComponent } from "./application/application-center.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserSidebarComponent } from "./user/user-sidebar.component";
import { UserDetailsComponent } from "./user/user-details.component";
import { PhotosDetailsComponent } from "./photos/photos-details.component";
import { PhotosSidebarComponent } from "./photos/photos-sidebar.component";
import { ApplicationComponent } from './application/application.component';
import { ApplicationContentComponent } from './application/application-content.component';
import { CommonModule, JsonPipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    UserSidebarComponent,
    UserDetailsComponent,
    PhotosDetailsComponent,
    PhotosSidebarComponent,
    ApplicationComponent,
    ApplicationContentComponent,
    ApplicationCenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

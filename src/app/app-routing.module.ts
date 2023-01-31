import { ApplicationCenterComponent } from "./application/application-center.component";
import { LookupResolver } from "./data/lookup.resolver";
import { PhotosSidebarComponent } from "./photos/photos-sidebar.component";
import { UserSidebarComponent } from "./user/user-sidebar.component";
import { PhotosDetailsComponent } from "./photos/photos-details.component";
import { UserDetailsComponent } from "./user/user-details.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApplicationComponent } from "./application/application.component";
import { ApplicationContentComponent } from "./application/application-content.component";
import { ApplicationResolver } from "./data/application.resolver";

const routes: Routes = [
  
  // {
  //   path: "users",
  //   component: UserSidebarComponent,
  // },
  // { path: "user/:id", component: UserDetailsComponent, outlet: "details" },
  // {
  //   path: "photos",
  //   component: PhotosSidebarComponent,
  // },
  // { path: "photo/:id", component: PhotosDetailsComponent, outlet: "details",
  //   resolve: { lookupCodes: LookupResolver }
  // },
  
  // NOTE: This setup works and you get params in the step.
  // http://localhost:62114/application/5(details:step/5)
  // { path: "application/:id", component: ApplicationComponent },
  // { path: "step/:stepId", component: ApplicationContentComponent, outlet: "step"},

  // this also works, but the step being inside doesn't. 
  // comments said that they are named routes, not child routes.
  // SO
  // Seems like we'd need an application route,
  // and a steps route that somehow knew what to render
  // so lets make a quick mockup.

  // Vendor Application
  //    2 signatures
  //    + your name
  //    + your location
  {
    path: "application/:id", 
     
    //resolve: { applicationData: ApplicationResolver },
    children: [
      { 
        path: ":stepId", 
        component: ApplicationContentComponent ,
        outlet: "step"
      },
      //{
        // if you needed an empty step
        // but for us we'd want to redirect I guess?
        // path: "",
      //}
    ],
    component: ApplicationCenterComponent,
    resolve: {
      applicationData: ApplicationResolver
    }
  },
  
  

  { path: "", redirectTo: "users", pathMatch: "full" },

  // now lets try to move the step inside?


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

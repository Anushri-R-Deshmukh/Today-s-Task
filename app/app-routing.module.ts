import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UserListComponent } from "./Users/user-list/user-list.component";
import { DetailComponent } from "./Pages/detail/detail.component";
import { AboutComponent } from "./Guard/about/about.component";
import { ContactComponent } from "./Guard/contact/contact.component";
import { UserComponent } from "./Guard/user/user.component";
import { UserInfoComponent } from "./Guard/user-info/user-info.component";
import { HomeComponent } from "./Guard/home/home.component";
import { UserGuard } from "./Guard/guard/user.guard";
import { DisplayFormComponent } from "./display-form/display-form.component";
import { RegTdfFormComponent } from "./reg-tdf-form/reg-tdf-form.component";
import { DeactivateGuard } from "./Guard/guard/deactivate.guard";
import { CanLoadGuard } from "./Guard/guard/can-load.guard";
import { PresentAddressComponent } from "./present-address/present-address.component";
import { PermentAddressComponent } from "./perment-address/perment-address.component";
import { ModelPopupComponent } from "./model-popup/model-popup.component";
import { OccasionComponent } from "./occasion/occasion.component";
import { OccasionDisplayComponent } from "./occasion-display/occasion-display.component";
import { OccasionConterComponent } from "./occasion-conter/occasion-conter.component";
import { PlanningBirtdayPageComponent } from "./planning-birtday-page/planning-birtday-page.component";
import { FavouritesComponent } from "./favourites/favourites.component";
import { MealApiComponent } from "./meal-api/meal-api.component";
import { SearchMealComponent } from "./search-meal/search-meal.component";
import { CateDisComponent } from "./cate-dis/cate-dis.component";
import { CategoryComponent } from "./category/category.component";
const routes: Routes = [
  // { path: "", redirectTo: "login", pathMatch: "full" },
  // { path: "login", component: LoginComponent },
  // { path: "register", component: RegisterComponent },
  // { path: "header", component: HeaderComponent },
  // { path: "user-list", component: UserListComponent },
  // { path: "home", component: HomeComponent },
  // { path: "country-list", component: DetailComponent },

  // { path: "", redirectTo: "home-dis", pathMatch: "full" },
  // { path: "home-dis", component: HomeComponent },
  // { path: "about", component: AboutComponent },

  // {
  //   path: "user",
  //   component: UserComponent,
  //   canActivateChild: [UserGuard],
  //   children: [
  //     { path: "contact", component: ContactComponent },
  //     { path: "user-info", component: UserInfoComponent, outlet: "nameFour" },
  //   ],
  // },
  // {
  //   path: "login",
  //   component: LoginComponent,
  //   canDeactivate: [DeactivateGuard],
  // },
  // { path: "dis-form", component: DisplayFormComponent },
  // {
  //   path: "reg-tdf",
  //   component: RegTdfFormComponent,
  //   canDeactivate: [DeactivateGuard],
  // },
  {
    path: "model",
    component: ModelPopupComponent,
  },
  {
    path: "present-add",
    component: PresentAddressComponent,
  },
  {
    path: "perment-add",
    component: PermentAddressComponent,
  },
  {
    path: "event",
    component: OccasionComponent,
  },
  {
    path: "event-dis",
    component: OccasionDisplayComponent,
  },
  {
    path: "counter",
    component: OccasionConterComponent,
  },
  {
    path: "planning-page",
    component: PlanningBirtdayPageComponent,
  },

  {
    path: "meal",
    component: MealApiComponent,
  },
  {
    path: "search",
    component: SearchMealComponent,
  },
  {
    path: "category",
    component: CategoryComponent,
  },
  {
    path: "categogy-dis",
    component: CateDisComponent,
  },
  // {
  //   path: "orders",
  //   loadChildren: () =>
  //     import("./Guard/orders/orders.module").then((m) => m.OrdersModule),
  //   canLoad: [CanLoadGuard],
  // },
  /*loadChildren: () =>     import('./user-list/user-list.module')
    .then(m => m.UserListModule)*/

  //  },

  //{ path: 'user', loadChildren: ()=> import('./Users/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

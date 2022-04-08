import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginComponent } from "src/app/login/login.component";
import { RegTdfFormComponent } from "src/app/reg-tdf-form/reg-tdf-form.component";

@Injectable({
  providedIn: "root",
})
export class DeactivateGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(
    component: LoginComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree
    | any {
    if (component.userName.dirty) {
      return window.confirm(
        "You have some unsave changes, Are you shure you want to navigate"
      );
    }
    return true;
  }
}

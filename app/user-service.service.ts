import { Injectable } from "@angular/core";
import { User } from "./reg-exp-test/user";

@Injectable({
  providedIn: "root",
})
export class UserServiceService {
  createUser(user: User) {
    console.log("User Name: " + user.username);
    console.log("Password: " + user.password);
    console.log("Mobile Number: " + user.mobileNumber);
    console.log("Email: " + user.email);
  }
  constructor() {}
}

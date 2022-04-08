import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UserServiceService } from "../user-service.service";
import { User } from "./user";

@Component({
  selector: "app-reg-exp-test",
  templateUrl: "./reg-exp-test.component.html",
  styleUrls: ["./reg-exp-test.component.css"],
})
export class RegExpTestComponent implements OnInit {
  unamePattern = "^[a-z0-9_-]{8,15}$";
  pwdPattern = "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).{6,12}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";

  isValidFormSubmitted: any = null;

  userForm = this.formBuilder.group({
    username: [
      "",
      [Validators.required, Validators.pattern(this.unamePattern)],
    ],
    password: ["", [Validators.required, Validators.pattern(this.pwdPattern)]],
    mobileNumber: ["", Validators.pattern(this.mobnumPattern)],
    email: ["", Validators.pattern(this.emailPattern)],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {}
  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if (this.userForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    let user: User = this.userForm.value;
    console.log(this.userForm.value);
    this.userService.createUser(user);
    this.userForm.reset();
  }
  get username() {
    return this.userForm.get("username");
  }
  get password() {
    return this.userForm.get("password");
  }
  get mobileNumber() {
    return this.userForm.get("mobileNumber");
  }
  get email() {
    return this.userForm.get("email");
  }
}

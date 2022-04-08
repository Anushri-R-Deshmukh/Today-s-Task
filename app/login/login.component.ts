import { Component, OnInit } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  hide = true;
  userName: FormControl = new FormControl();
  constructor() {
    console.log("Login Module Loaded..");
  }

  ngOnInit(): void {}
  save(form: NgForm): void {
    console.log(form.value);
  }
}

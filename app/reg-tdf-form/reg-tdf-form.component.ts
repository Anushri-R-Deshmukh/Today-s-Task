import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-reg-tdf-form",
  templateUrl: "./reg-tdf-form.component.html",
  styleUrls: ["./reg-tdf-form.component.css"],
})
export class RegTdfFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm): void {
    console.log(form.value);
  }
}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
// import * as events from "events";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"],
})
export class DropdownComponent implements OnInit {
  // isSubmitted = false;

  // // City Names
  // City: any = ["Florida", "South Dakota", "Tennessee", "Michigan"];

  // constructor(public fb: FormBuilder) {}
  ngOnInit(): void {}

  // /*########### Form ###########*/
  // registrationForm = this.fb.group({
  //   cityName: ["", [Validators.required]],
  // });

  // // Choose city using select dropdown
  // changeCity(e: any) {
  //   console.log(e.value);
  //   this.cityName.setValue(e.target.value, {
  //     onlySelf: true,
  //   });
  // }

  // Getter method to access formcontrols
  // get cityName() {
  //   return this.registrationForm.get("cityName");
  // }

  /*########### Template Driven Form ###########*/
  // onSubmit() {
  //   this.isSubmitted = true;
  //   if (!this.registrationForm.valid) {
  //     return false;
  //   } else {
  //     alert(JSON.stringify(this.registrationForm.value));
  //   }
  // }

  // name = "Angular 5";
  // selectedCountry: any;

  // cities = <any>{};

  // countries = [
  //   {
  //     id: 1,
  //     name: "France",
  //     cities: ["Paris", "Marseille", "Nice"],
  //   },
  //   {
  //     id: 2,
  //     name: "Germany",
  //     cities: ["Hamburg", "Berlin", "Munich"],
  //   },
  //   {
  //     id: 3,
  //     name: "Italy",
  //     cities: ["Roma", "Milan", "Napoli"],
  //   },
  // ];

  // ngOnInit() {
  //   this.cities = this.countries.filter((x) => x.id == 1)[0].cities;
  // }

  // onChange(deviceValue: any) {
  //   this.cities = this.countries.filter((x) => x.id == deviceValue)[0].cities;
  // }
}

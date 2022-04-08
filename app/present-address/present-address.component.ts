import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AddressService } from "../address.service";
import { DataService } from "../data.service";

@Component({
  selector: "app-present-address",
  templateUrl: "./present-address.component.html",
  styleUrls: ["./present-address.component.css"],
})
export class PresentAddressComponent implements OnInit {
  preAddressForm: FormGroup;
  formData: any;
  isRequired: boolean = true;
  isSubmitted: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private data: DataService,
    private address: AddressService
  ) {}
  ngOnInit() {
    this.preAddressForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      address: ["", [Validators.required]],
    });
  }
  onSubmit(user: any) {
    this.router.navigate(["perment-add", user]);
  }
  onChecked(item: any, event: any) {
    let { checked, value } = event.target;
    if (checked) {
      this.address.sendMessage(this.preAddressForm.value);
      // this.router.navigate(["/perment-add", item]);
      // this.preAddressForm.value;
      // console.log(this.preAddressForm.value);
    } else {
      this.address.clearMessages();
      // let index = this.preAddressForm.value.indexOf(this.preAddressForm.value);
      // if (index !== 1) this.preAddressForm.value.splice(index, 1);
    }
  }
}

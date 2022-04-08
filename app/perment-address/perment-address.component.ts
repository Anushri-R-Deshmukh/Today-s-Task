import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AddressService } from "../address.service";
import { DataService } from "../data.service";

@Component({
  selector: "app-perment-address",
  templateUrl: "./perment-address.component.html",
  styleUrls: ["./perment-address.component.css"],
})
export class PermentAddressComponent implements OnInit, OnDestroy {
  registerForm: any = FormGroup;
  formData: any[] = [];
  subscription: Subscription;
  // users: any;
  // name: any;
  // email: any;
  // phone: any;
  // address: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private data: DataService,
    private addressS: AddressService
  ) {
    this.subscription = this.addressS.getMessage().subscribe((data) => {
      if (data) {
        this.formData.push(data);
      } else {
        // clear messages when empty message received
        this.formData = [];
      }
    });
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((data) => {
    //   console.log("data from edit", data);
    //   this.name = data["name"];
    //   this.email = data["email"];
    //   this.phone = data["phone"];
    //   this.address = data["address"];
    //   this.registerForm.patchValue([data]);
    // });
    // this.createform();
    // this.data.shareData.subscribe((response) => {
    //   console.log("response:::", response);
    //   this.formData = response;
    // });
  }

  createform() {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      address: ["", [Validators.required]],
    });
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

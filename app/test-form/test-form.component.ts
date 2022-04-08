import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TestFormSService } from "../test-form-s.service";
import { TestService } from "../test.service";

@Component({
  selector: "app-test-form",
  templateUrl: "./test-form.component.html",
  styleUrls: ["./test-form.component.css"],
})
export class TestFormComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean = false;
  isRequired: boolean = true;
  isSubmitted: boolean;

  constructor(private fb: FormBuilder, private testService: TestFormSService) {}

  city = [
    { id: 1, value: "Amravati" },
    { id: 2, value: "Nagpur" },
    { id: 3, value: "Hyderabad" },
    { id: 3, value: "Vijayawada" },
  ];
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group({
      name: this.testService.valid.required,
      age: this.testService.valid.required,
      phone: this.testService.valid.required,
      email: this.testService.valid.required,
      gender: this.testService.valid.required,
      address: this.testService.valid.required,
      dob: this.testService.valid.required,
      city: this.testService.valid.required,
      password: this.testService.valid.required,
    });
  }
  onSubmit() {
    this.submitted = true;
    // this.userData(this.registerForm.value);
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }
  get control() {
    return this.registerForm.controls;
  }
  get name() {
    return this.registerForm.get("name");
  }
  get age() {
    return this.registerForm.get("age");
  }
  get phoneNumbers() {
    return this.registerForm.get("age");
  }
}

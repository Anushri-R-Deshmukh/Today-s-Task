import { Injectable } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class TestFormSService {
  constructor() {}
  /**
   * @description
   * Form Control Validators
   */
  valid = {
    required: ["", Validators.required],
    nonMandatory: [""],
    disabled: [{ value: "", disabled: true }],
    textArea: [
      "",
      [Validators.required, Validators.pattern(/^(?! )[a-zA-Z0-9 ]+$/)],
    ],
    phoneNumbers: [
      "",
      [Validators.required, Validators.pattern(/^(?! )[0-9]+$/)],
    ],
    password: [
      "",
      [Validators.pattern("((?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,30})")],
    ],
    email: [
      "",
      [
        Validators.required,
        Validators.pattern(
          "^(?![/.])[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\\.[a-zA-Z]{2,4}$"
        ),
      ],
    ],
  };
}

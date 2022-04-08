import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-pan-validation",
  templateUrl: "./pan-validation.component.html",
  styleUrls: ["./pan-validation.component.css"],
})
export class PanValidationComponent implements OnInit {
  panNoValidation: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.panNoValidation = this.formBuilder.group({
      name: ["", [Validators.required, Validators.pattern("[a-zA-Z]{8}")]],
      panNo: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "[a-zA-Z]{3}[pP]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}"
          ),
        ],
      ],
    });
  }
}

import { Component, Input, OnInit } from "@angular/core";
import {
  FormControl,
  ControlContainer,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";

@Component({
  selector: "app-val-msg",
  templateUrl: "./val-msg.component.html",
  styleUrls: ["./val-msg.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ValMsgComponent,
      multi: true,
    },
  ],
})
export class ValMsgComponent implements OnInit {
  get control() {
    if (this.formControlName) {
      return this.controlContainer.control.get(this.formControlName);
    } else {
      return;
    }
  }

  @Input() isRequired: boolean;
  @Input() placeHolder: string;
  @Input() formControlName: string;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (this.control.value === null) {
      this.control.patchValue("");
    }
    this.control.valueChanges.subscribe((val: any) => {
      if (val === null) {
        this.control.patchValue("");
      }
    });
  }
}

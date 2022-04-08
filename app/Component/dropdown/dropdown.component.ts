import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"],
})
export class DropdownComponent implements OnInit {
  showOption = false;
  @Input() placeholder: string;
  @Input() values: string;
  @Input() value: string;

  @Output() valueChanged: EventEmitter<string> = new EventEmitter();

  select(value: string) {
    this.valueChanged.emit(value);
  }
  toggleOption() {
    this.showOption = !this.showOption;
  }
  constructor() {}

  ngOnInit(): void {}
}

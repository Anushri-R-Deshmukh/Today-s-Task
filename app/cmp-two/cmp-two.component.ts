import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-cmp-two",
  templateUrl: "./cmp-two.component.html",
  styleUrls: ["./cmp-two.component.css"],
})
export class CmpTwoComponent implements OnInit {
  @Input() item = "";
  @Input() selectedCity = "";
  @Output() newItem = new EventEmitter<string>();
  constructor() {}
  ngOnInit(): void {}
  addNewItem(value: string) {
    this.newItem.emit(value);
  }
}

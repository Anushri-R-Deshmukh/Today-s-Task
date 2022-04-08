import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cmp-three",
  templateUrl: "./cmp-three.component.html",
  styleUrls: ["./cmp-three.component.css"],
})
export class CmpThreeComponent implements OnInit {
  currentItem = "hyd";
  items = ["hyd", "amt", "ngp"];
  constructor() {}

  ngOnInit(): void {}
  addItem(newItem: string): void {
    this.items.push(newItem);
  }
}

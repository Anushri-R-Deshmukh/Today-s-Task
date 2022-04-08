import { Component, OnInit } from "@angular/core";
import { CARS } from "./car";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  cars: any[] = CARS;
  searchText: string;
  constructor() {}

  ngOnInit(): void {}
}

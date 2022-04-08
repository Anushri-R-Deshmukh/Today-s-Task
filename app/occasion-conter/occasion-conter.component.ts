import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-occasion-conter",
  templateUrl: "./occasion-conter.component.html",
  styleUrls: ["./occasion-conter.component.css"],
})
export class OccasionConterComponent implements OnInit {
  userData: any;
  id: number;
  name: any;
  date: any;
  occasion: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userData = params;
      this.id = params["id"];
      this.name = params["name"];
      this.date = params["date"];
      this.occasion = params["occasion"];
    });
  }
}

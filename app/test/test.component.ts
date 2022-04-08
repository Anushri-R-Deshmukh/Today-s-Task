import { Component, OnInit } from "@angular/core";
import { TestService } from "../test.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"],
})
export class TestComponent implements OnInit {
  gridColumns = 3;
  countries: any;
  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.testService.getAllcontents().subscribe((res) => {
      this.countries = res;
      console.log(this.countries);
    });
  }
}

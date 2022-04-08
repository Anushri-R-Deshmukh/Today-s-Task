import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "src/app/Services/api.service";
import { Country } from "src/app/Types/api.td";

@Component({
  selector: "app-country-card",
  templateUrl: "./country-card.component.html",
  styleUrls: ["./country-card.component.css"],
})
export class CountryCardComponent implements OnInit {
  @Input() country: Country;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllCountries();
  }
  getAllUser() {
    this.apiService.getAllCountries().subscribe((response) => {});
  }
}

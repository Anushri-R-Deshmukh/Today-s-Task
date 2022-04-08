import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./Services/api.service";
import { Theme, ThemeService } from "./Services/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "MyApp";
  theme: Observable<Theme>;

  constructor(
    private apiService: ApiService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.apiService.getAllCountries().subscribe((res) => console.log(res));
    // this.theme = this.themeService.mode$;
  }
}

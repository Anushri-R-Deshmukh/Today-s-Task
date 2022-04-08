import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/app/Services/theme.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  toggleTheme(): void {
    // this.themeService.toggleMode();
  }
}

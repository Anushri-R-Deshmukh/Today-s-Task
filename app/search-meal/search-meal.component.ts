import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FoodSearchResult } from "./food-search-result";
import { MealService } from "./search-meal.service";

@Component({
  selector: "app-search-meal",
  templateUrl: "./search-meal.component.html",
  styleUrls: ["./search-meal.component.css"],
})
export class SearchMealComponent implements OnInit {
  searchTerm: string;
  results: FoodSearchResult;
  formData: any = [];
  queryParams: Params = {
    q: "",
  };
  filter: Object;
  constructor(
    private mealService: MealService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.doSearch(name);
    this.doSearchId(this.searchTerm);
    // this.searchText(this.formData);
  }
  resetQueryParams() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { q: this.searchTerm },
      queryParamsHandling: "merge",
    });
  }

  doSearch(name: any) {
    this.mealService.find(name).subscribe((data) => {
      this.results = data.meals;
      console.log("results by name", this.results);
    });
    this.resetQueryParams();
  }

  doSearchId(id: any) {
    this.mealService.getMealDetailsId(id).subscribe((data) => {
      this.results = data.meals;
      console.log("results", this.results);
    });
    this.resetQueryParams();
  }
  handleResult(data: FoodSearchResult) {}
  // searchText(name: string) {
  //   this.formData = name;
  //   this.http
  //     .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name} `)
  //     .subscribe((obj) => {
  //       this.filter = obj;
  //       console.log(obj);
  //     });
  // }
}

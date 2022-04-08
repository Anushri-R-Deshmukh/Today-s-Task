import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FoodSearchResult } from "./food-search-result";
import { PageEvent } from "@angular/material/paginator";
import { Observable } from "rxjs";

const API_URL = "https://api.nal.usda.gov/fdc/v1";
const API_KEY = "fQdyrcR2a4IvRct1IJEDGIwSLzrDA3yjegFEvHlt";
@Injectable({
  providedIn: "root",
})
export class MealService {
  constructor(private http: HttpClient) {}

  // find(name: string) {
  //   return this.http.get<any>(
  //     `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
  //   );
  // }
  find(name: any): Observable<any> {
    return this.http.get<any[]>(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
  }
  getMealDetailsId(id: number): Observable<any> {
    return this.http.get<any[]>(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }

  getDetail(foodId: string) {
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=/${foodId}?api_key=${API_KEY}`;
    return this.http.get<FoodSearchResult>(url);
  }
}

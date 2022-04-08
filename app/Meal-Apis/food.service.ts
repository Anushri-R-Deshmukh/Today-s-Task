import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Meal {
  meal: any;
}

export interface Recipes {
  meals: any;
}
@Injectable({
  providedIn: "root",
})
export class FoodService {
  recipeURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  categoryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  randomURL = "http://localhost:3000/meal";
  allCategoriesURL = "http://localhost:3000/mealCategory";
  areaURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
  mealId = "http://localhost:3000/mealId";
  mealUrl: string = "https://www.themealdb.com/api/json/v1/1/random.php";
  mealName = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
  constructor(private http: HttpClient) {}
  favourites: any = [];

  //get a random meal
  getRandomMeal(): Observable<any> {
    return this.http.get<any>(this.mealUrl);
  }
  //get a random meal by category
  getMealByCategory(category: string): Observable<any> {
    if (category === "Meat") {
      const meatList = ["Beef", "Chicken", "Lamb", "Pork", "Goat"];
      let randomNumber = Math.floor(Math.random() * meatList.length);
      category = meatList[randomNumber];
      return this.http.get<any>(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
    } else {
      return this.http.get<any>(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
    }
  }
  //get details of a meal (used for meal by category)
  getMealDetails(id: number): Observable<any> {
    return this.http.get<any>(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
  getMealNames(name: any): Observable<any> {
    return this.http.get<any[]>(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
  }
  getMealName() {
    return this.http.get<any[]>(this.mealName);
  }
  fetchRandom() {
    return this.http.get<any[]>(this.mealUrl);
  }
}

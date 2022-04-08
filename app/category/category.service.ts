import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  getCategory() {
    return this.http.get<any[]>(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
  }
}

import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { FoodService } from "../food.service";
import { Meal } from "../meal";

@Component({
  selector: "app-random-api",
  templateUrl: "./random-api.component.html",
  styleUrls: ["./random-api.component.css"],
})
export class RandomApiComponent implements OnInit {
  meal: Meal;
  isLoading: boolean = true;
  safeUrl: SafeResourceUrl;
  filteredUsers: any[];
  constructor(
    private mealService: FoodService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.meal = new Meal();
  }
  //get randome meal data
  getRandomMeal() {
    this.mealService.getRandomMeal().subscribe((meal) => {
      this.createMeal(meal.meals[0]);
    });
  }
  // get the data according to category
  GetMealByCategory(category: string) {
    this.mealService.getMealByCategory(category).subscribe((meal) => {
      let randomNumber = Math.floor(Math.random() * meal.meals.length);
      this.mealService
        .getMealDetails(meal.meals[randomNumber].idMeal)
        .subscribe((mealDetails) => {
          this.createMeal(mealDetails.meals[0]);
        });
    });
  }
  //display details of random meal data
  createMeal(meal: any) {
    this.meal.idMeal = meal.idMeal;
    this.meal.imgSrc = meal.strMealThumb;
    this.meal.recipe = meal.strInstructions;
    this.meal.title = meal.strMeal;
    this.meal.video = `https://www.youtube.com/embed/${meal.strYoutube.slice(
      -11
    )}`;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.meal.video
    );
    this.meal.category = meal.strCategory;
    this.meal.area = meal.strArea;
    if (meal.strTags) {
      let tags = meal.strTags.split(",").join(", ");
      this.meal.tags = tags;
    }

    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      }
    }
    this.meal.ingredients = ingredients;
    this.isLoading = false;
  }
  filterName() {}

  addToFavItem() {}
}

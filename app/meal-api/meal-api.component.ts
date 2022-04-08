import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { AddressService } from "../address.service";
import { AppComponent } from "../app.component";
import { FavService } from "../fav.service";
import { FoodService, Recipes } from "../Meal-Apis/food.service";
import { Meal } from "../Meal-Apis/meal";

@Component({
  selector: "app-meal-api",
  templateUrl: "./meal-api.component.html",
  styleUrls: ["./meal-api.component.css"],
})
export class MealApiComponent implements OnInit {
  userData: any = [];
  meal: Meal;
  safeUrl: SafeResourceUrl;
  isLoading: boolean = true;
  random: { [key: string]: string } = {};
  catData: any = [];
  product: Object;

  constructor(
    private food: FoodService,
    private route: ActivatedRoute,
    private router: Router,
    private app: AppComponent,
    private sanitizer: DomSanitizer,
    private favService: FavService,
    private address: AddressService
  ) {}

  ngOnInit(): void {
    this.meal = new Meal();
    this.GetMealByCategory(this.catData);

    // this.getMeal();
  }

  getMeal() {
    this.food.fetchRandom().subscribe((data: any) => {
      this.userData = data.meals;
      this.createMeal(data.meals[0]);
      console.log(this.userData);
    });
  }
  // get the data according to category
  GetMealByCategory(category: string) {
    this.food.getMealByCategory(category).subscribe((meal) => {
      this.catData = meal;
      let randomNumber = Math.floor(Math.random() * meal.meals.length);
      this.food
        .getMealDetails(meal.meals[randomNumber].idMeal)
        .subscribe((mealDetails) => {
          this.createMeal(mealDetails.meals[0]);
        });
    });
  }
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
    // Get all ingredients from the object. Up to 20
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
  addToFav() {
    this.address.sendMessage((this.userData = this.meal));
    // this.favService.addToCart(item);
    // this.favService.addToWishlist(this.userData).subscribe((res) => {
    //   this.product = res;
    // });
  }
}

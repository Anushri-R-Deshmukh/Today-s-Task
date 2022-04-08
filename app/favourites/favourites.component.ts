import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { AddressService } from "../address.service";
import { FavService } from "../fav.service";
import { Meal } from "../Meal-Apis/meal";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: ["./favourites.component.css"],
})
export class FavouritesComponent implements OnInit {
  userdata: any = [];

  meal: Meal;
  safeUrl: SafeResourceUrl;
  isLoading: boolean;
  constructor(
    private favS: FavService,
    private address: AddressService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // this.favS.getProduct().subscribe((res: any) => {
    //   this.data = res;
    //   console.log(":::::", this.data);
    // });
    // this.getWish();
    this.address.getMessage().subscribe((res) => {
      this.userdata.push(res.data);
      // this.data = data.Meal;
      console.log("::::::::::::", this.userdata);
    });
  }

  removeItem(i: number) {
    this.userdata.splice(i, 1);
  }
  // getWish() {
  //   this.favS.getWishlist().subscribe((res) => {
  //     this.data = res;
  //     console.log(this.data);
  //   });
  // }
}

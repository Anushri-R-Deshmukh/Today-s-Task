import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FavService {
  cartItem: any = [];
  productList = new BehaviorSubject<any>([]);
  shareData = new BehaviorSubject([{ name: "akhil" }]);
  constructor(private http: HttpClient) {}
  getProduct() {
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.cartItem.push(...product);
    this.productList.next(product);
  }
  addToCart(product: any) {
    this.cartItem.push(product);
    this.productList.next(this.cartItem);
    console.log(this.cartItem);
  }
  removeCartItem(product: any) {
    this.cartItem.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItem.splice(index, 1);
      }
    });
    this.productList.next(this.cartItem);
  }
  getWishlist() {
    return this.http.get("http://localhost:3000/favorite/");
    //.pipe(
    //   map((results: any[]) => {
    //     let productIds = [];

    //     results.forEach((item) => productIds.push(item.id));

    //     return productIds;
    //   })
    // );
  }

  addToWishlist(item: any) {
    return this.http.post("http://localhost:3000/favorite/", item);
  }

  removeFromWishlist(item: any) {
    return this.http.delete("http://localhost:3000/favorite/" + item.id);
  }
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService } from "./category.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  categiries: any = [];
  constructor(private category: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.getDataCat();
  }
  getDataCat() {
    this.category.getCategory().subscribe((res: any) => {
      this.categiries = res.categories;
      console.log(this.categiries);
    });
  }
  addQueryParam(data: any) {
    this.router.navigate(["/categogy-dis", data]);
  }
}

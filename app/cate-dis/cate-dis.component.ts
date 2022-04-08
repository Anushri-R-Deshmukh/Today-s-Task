import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cate-dis",
  templateUrl: "./cate-dis.component.html",
  styleUrls: ["./cate-dis.component.css"],
})
export class CateDisComponent implements OnInit {
  userData: Array<any> = [];
  idCategory: number;
  strCategory: any;
  strCategoryThumb: any;
  strCategoryDescription: any;
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userData = params;
      this.idCategory = params["idCategory"];
      this.strCategory = params["strCategory"];
      this.strCategoryThumb = params["strCategoryThumb"];
      this.strCategoryDescription = params["strCategoryDescription"];
      console.log(this.userData);
    });
  }
}

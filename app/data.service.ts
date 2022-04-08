import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  shareData = new BehaviorSubject([{ name: "akhil" }]);
  constructor() {}
}

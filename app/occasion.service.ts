import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OccasionService {
  constructor(private httpClient: HttpClient) {}
  getData() {
    return this.httpClient.get("http://localhost:3000/comments");
  }
  postData(data: any) {
    return this.httpClient.post("http://localhost:3000/comments", data);
  }
}

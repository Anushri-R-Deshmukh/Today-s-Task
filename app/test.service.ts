import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TestService {
  constructor(private httpClient: HttpClient) {}
  getAllcontents() {
    return this.httpClient.get("https://restcountries.com/v2/all");
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Country } from "../Types/api.td";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  base_Url: "https://restcountries.eu/rest/v2/";
  constructor(private httpClient: HttpClient) {}

  getAllCountries() {
    return this.httpClient.get<Country[]>(`${this.base_Url}/all`);
  }
  getCountryByName(name: string) {
    return this.httpClient
      .get<Country[]>(`${this.base_Url}/name/${name}`)
      .pipe(map(([res]) => res));
  }

  getCountriesByCodes(codes: string[]) {
    console.log(`${this.base_Url}/alhpa?codes=${codes.join(";")}`);
    return this.httpClient.get<Country[]>(
      `${this.base_Url}/alpha?codes=${codes.join(";")}`
    );
  }
}

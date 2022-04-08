import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CurdOptService {
  base_Url = "http://localhost:3000/posts/";
  constructor(private http: HttpClient) {}
  CreateUser(user: any) {
    return this.http.post(this.base_Url, user);
  }
  getAllUser() {
    return this.http.get(this.base_Url);
  }
  updateUser(user: any) {
    return this.http.put(this.base_Url + user.id, user);
  }
  deleteUser(user: any) {
    return this.http.delete(this.base_Url + user.id);
  }
}

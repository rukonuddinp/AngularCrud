import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseurl: string = "https://localhost:44324";

  constructor(private http: HttpClient) {}

  get(api) {
    return this.http.get(this.baseurl + api);
  }

  post(api, body?: object) {
    return this.http.post(this.baseurl + api, body);
  }

  put(api, body?: object) {
    return this.http.put(this.baseurl + api, body);
  }

  delete(api, id?: any) {
    return this.http.delete(this.baseurl + api);
  }
}

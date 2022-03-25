import { Injectable } from "@angular/core";
import { Shop_Information } from "../Model/Shop_Information";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class shopService {
  shopList: Shop_Information[] = new Array<Shop_Information>();
  http: HttpClient;
  baseUrl: string = "https://localhost:44324";
  constructor(_http: HttpClient) {
    this.http = _http;
  }

  getData() {
    return this.http.get(this.baseUrl + "/api/Shop_Information");
  }

  insertData(SH: Shop_Information) {
    return this.http.post(this.baseUrl + "/api/Shop_Information", SH);
  }

  updateData(SH: Shop_Information) {
    return this.http.put<Shop_Information>(
      this.baseUrl + "/api/Shop_Information/" + SH.Shop_Id,
      SH
    );
  }

  deleteData(SH: Shop_Information) {
    return this.http.delete(
      this.baseUrl + "/api/Shop_Information/" + SH.Shop_Id
    );
  }
}

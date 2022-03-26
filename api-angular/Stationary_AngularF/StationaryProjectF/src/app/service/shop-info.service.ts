import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";
import { Shop_Information } from "../Model/Shop_Information";

@Injectable({
  providedIn: "root",
})
export class ShopInfoService {
  constructor(private api: ApiService) {}

  getData() {
    return this.api.get("/api/Shop_Information");
  }

  insertData(SH: Shop_Information) {
    return this.api.post("/api/Shop_Information", SH);
  }

  updateData(SH: Shop_Information) {
    return this.api.put("/api/Shop_Information/" + SH.Shop_Id, SH);
  }

  deleteData(SH: Shop_Information) {
    return this.api.delete("/api/Shop_Information/" + SH.Shop_Id);
  }
}

import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";
import { Product_Information } from "../Model/Product_Information";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private api: ApiService) {}

  getData() {
    return this.api.get("/api/Product_Information");
  }

  insertData(p) {
    return this.api.post("/api/Product_Information", p);
  }

  updateData(p: Product_Information) {
    return this.api.put("/api/Product_Information/" + p.Product_Id, p);
  }

  deleteData(id) {
    return this.api.delete("/api/Product_Information/" + id);
  }
}

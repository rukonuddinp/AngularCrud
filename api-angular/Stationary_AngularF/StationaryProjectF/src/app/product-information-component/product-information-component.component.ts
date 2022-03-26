import { Component, OnDestroy, OnInit } from "@angular/core";
import { Shop_Information } from "../Model/Shop_Information";
import { Product_Information } from "../Model/Product_Information";
import { Subscription } from "rxjs";
import { ShopInfoService } from "../service/shop-info.service";
import { ProductService } from "../service/product.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-product-information-component",
  templateUrl: "./product-information-component.component.html",
  styleUrls: ["./product-information-component.component.css"],
})
export class ProductInformationComponentComponent implements OnInit, OnDestroy {
  productList: Product_Information[] = new Array<Product_Information>();

  prodForm: FormGroup;
  shopList: Shop_Information[] = new Array<Shop_Information>();

  subs: Subscription = new Subscription();
  subs2: Subscription = new Subscription();

  constructor(
    private prodtService: ProductService,
    private shopService: ShopInfoService,
    private fb: FormBuilder
  ) {
    // this.prodForm.Product_Id = 0;
    this.loadDataShop();
  }

  ngOnInit() {
    this.prodForm = this.fb.group({
      Product_Id: [null],
      Product_Name: ["", Validators.required],
      Quantity: ["", Validators.required],
      Price: [0],
      IsAvailable: [false],
      OrderDate: [new Date().toLocaleDateString(), [Validators.required]],
      Image: ["", Validators.required],
      Shop_Id: undefined,
      Shop_Name: ["", Validators.required],
      actionType: 1,
    });
    this.loadData();
  }

  dateChange(date: Date) {
    return new Date(date).toDateString();
  }

  loadDataShop() {
    this.shopService.getData().subscribe((res: any) => {
      this.shopList = res.map((item) => {
        return {
          Address: item["address"],
          MobileNo: item["mobileNo"],
          Shop_Id: item["shop_Id"],
          Shop_Name: item["shop_Name"],
        };
      });
      this.prodForm.get("Shop_Id").setValue(this.shopList[0].Shop_Id);
    });
  }

  loadData() {
    this.loadDataShop();

    this.subs2 = this.prodtService.getData().subscribe(
      (res: Product_Information[]) => {
        this.productList = res;
        console.log(res);
      },
      (err) => console.log
    );
  }

  submitInfo() {
    const values = this.prodForm.getRawValue();
    const actionType = values["actionType"];
    console.log(actionType);

    console.log(values);

    if (actionType == 1) {
      this.subs = this.prodtService.insertData(values).subscribe((data) => {
        this.productList.push(data);
        console.log("INSERTED");
      });
    } else if (actionType == 2) {
      this.prodtService.updateData(values).subscribe((res) => {
        console.log("UPDATED");
      });
    } else if (actionType == 3) {
      this.prodtService.deleteData(values["Shop_Id"]).subscribe((res) => {
        console.log("Deleted");
      });
    }

    this.loadData();
  }

  onUpload(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.prodForm.get("Image").setValue(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.subs2.unsubscribe();
  }
}

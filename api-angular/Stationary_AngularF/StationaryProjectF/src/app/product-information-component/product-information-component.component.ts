import { Component, OnDestroy, OnInit } from "@angular/core";
import { Shop_Information } from "../Model/Shop_Information";
import { Product_Information } from "../Model/Product_Information";
import { shopService } from "../service/shopService";
import { productService } from "../service/productService";
import { Subscription } from "rxjs";

@Component({
  selector: "app-product-information-component",
  templateUrl: "./product-information-component.component.html",
  styleUrls: ["./product-information-component.component.css"],
})
export class ProductInformationComponentComponent implements OnInit, OnDestroy {
  productList: Product_Information[] = new Array<Product_Information>();
  prodtService: productService;
  shopService: shopService;
  prodForm: Product_Information = new Product_Information();
  shopList: Shop_Information[] = new Array<Shop_Information>();
  actionType: number;

  subs: Subscription = new Subscription();
  subs2: Subscription = new Subscription();

  constructor(_prodtService: productService, _shopService: shopService) {
    this.prodtService = _prodtService;
    this.shopService = _shopService;
    this.prodForm.Product_Id = 0;
    this.loadDataShop();
  }

  ngOnInit() {
    this.loadData();
  }

  dateChange(date: Date) {
    return new Date(date).toDateString();
  }

  async loadDataShop() {
    this.shopService.getData();
    this.waitForShopResult();
  }

  getShopList(): Shop_Information[] {
    return this.shopList;
  }

  waitForShopResult() {
    var jData = JSON.parse(localStorage.getItem("Data_Shop"));
    if (!Object.is(jData, null)) {
      for (var v = 0; v < jData.length; v++) {
        this.shopList.push(
          new Shop_Information(
            Number(jData[v].Shop_Id),
            jData[v].Shop_Name,
            jData[v].Address,
            jData[v].MobileNo
          )
        );
      }
    } else {
      // setTimeout(()=> {
      //   this.waitForShopResult();
      // },1500);
    }
  }

  loadData() {
    this.subs2 = this.prodtService.getData().subscribe(
      (res: Product_Information[]) => {
        this.productList = res;
      },
      (err) => console.log
    );
  }

  submitInfo(prodForm: Product_Information, actionType: Number) {
    console.log("#################");
    console.log(prodForm.OrderDate);
    console.log("#########@@@@@@@@########");
    console.log("prodForm");
    console.log(prodForm);
    console.log(actionType);

    if (actionType == 1) {
      this.subs = this.prodtService.insertData(prodForm).subscribe((data) => {
        this.productList.push(data);
        console.log(prodForm, data);
      });
    } else if (actionType == 2) {
      console.log("update");
      this.prodtService.updateData(prodForm);
    } else {
      this.prodtService.deleteData(prodForm);
    }

    this.loadData();
  }

  upload(event) {
    var file = event.target.files[0];
    var filereader = new FileReader();
    filereader.onload = function () {
      var image64string = filereader.result.toString();
      console.log(image64string);
      localStorage.setItem("Image", image64string);
    };
    filereader.readAsDataURL(file);
    this.prodForm.Image = localStorage.getItem("Image");
  }

  updateEntity(item) {
    this.prodForm.Product_Id = item.product_Id;
    this.prodForm.Product_Name = item.product_Name;
    this.prodForm.Quantity = item.quantity;
    this.prodForm.Price = item.price;
    this.prodForm.IsAvailable = item.isAvailable;
    this.prodForm.Image = item.image;
    this.prodForm.Shop_Id = item.shop_Id;
    this.prodForm.OrderDate = new Date(item.orderDate);
    this.actionType = 2;
  }

  deleteEntity(item) {
    this.prodForm.Product_Id = item.product_Id;
    this.prodForm.Product_Name = item.product_Name;
    this.prodForm.Quantity = item.quantity;
    this.prodForm.Price = item.price;
    this.prodForm.IsAvailable = item.isAvailable;
    this.prodForm.Image = item.image;
    this.prodForm.Shop_Id = item.shop_Id;

    this.actionType = 3;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.subs2.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ApiService } from "../api.service";
import { Shop_Information } from "../Model/Shop_Information";
import { ShopInfoService } from "../service/shop-info.service";

@Component({
  selector: "app-shop-information-component",
  templateUrl: "./shop-information-component.component.html",
  styleUrls: ["./shop-information-component.component.css"],
})
export class ShopInformationComponentComponent implements OnInit, OnDestroy {
  shopList: Shop_Information[] = new Array<Shop_Information>();
  shopForm: Shop_Information = new Shop_Information();
  actionType: number;

  subs1: Subscription = new Subscription();
  subs2: Subscription = new Subscription();
  subs3: Subscription = new Subscription();
  subs4: Subscription = new Subscription();
  subs5: Subscription = new Subscription();

  constructor(private shopService: ShopInfoService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.subs1 = this.shopService.getData().subscribe(
      (
        result: {
          address;
          mobileNo;
          product_Information;
          shop_Id;
          shop_Name;
        }[]
      ) => {
        this.shopList = result.map((item) => {
          const shop: Shop_Information = {
            Address: item.address,
            MobileNo: item.mobileNo,

            Shop_Id: item.shop_Id,
            Shop_Name: item.shop_Name,
          };
          return shop;
        });
      },
      (err) => {
        console.error(err);
      }
    );
  }

  submitInfo(shopForm: Shop_Information, actionType: Number) {
    console.log(shopForm);
    console.log(actionType);
    if (actionType == 1) {
      this.subs2 = this.shopService.insertData(shopForm).subscribe((res) => {
        console.log("inserted");
        this.loadData();
      });
    } else if (actionType == 2) {
      this.subs3 = this.shopService.updateData(shopForm).subscribe((res) => {
        console.log("update");
      });
    } else {
      this.subs4 = this.shopService.deleteData(shopForm).subscribe((res) => {
        console.log("Deleted");
      });
    }

    setTimeout(() => {
      this.loadData();
    }, 2000);
  }

  updateEntity(item: Shop_Information) {
    this.shopForm.Shop_Id = item.Shop_Id;
    this.shopForm.Shop_Name = item.Shop_Name;
    this.shopForm.Address = item.Address;
    this.shopForm.MobileNo = item.MobileNo;

    this.actionType = 2;
  }

  deleteEntity(item: Shop_Information) {
    this.shopForm.Shop_Id = item.Shop_Id;
    this.shopForm.Shop_Name = item.Shop_Name;
    this.shopForm.Address = item.Address;
    this.shopForm.MobileNo = item.MobileNo;

    this.actionType = 3;
  }

  ngOnDestroy(): void {
    this.subs1.unsubscribe();
    this.subs2.unsubscribe();
    this.subs3.unsubscribe();
    this.subs3.unsubscribe();
    this.subs4.unsubscribe();
  }
}

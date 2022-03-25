
export class Product_Information 
{

    Product_Id? : number;
    Product_Name? : string;
    Quantity? : string;
    Price? :number;
    IsAvailable? : Boolean;
    OrderDate? : Date;
    Image? : string;
    Shop_Id? : number;
    Shop_Name? : string;


    constructor(_Product_Id? : number, _Product_Name?:string, _Quantity?: string, _Price?:number,
         _IsAvailable?:Boolean, _OrderDate?:Date, _Image? : string, _Shop_Id? : number, _Shop_Name? : string  )
         {

    this.Product_Id= _Product_Id;
    this.Product_Name= _Product_Name;
    this.Quantity=_Quantity;
    this.Price=_Price;
    this.IsAvailable=_IsAvailable;
    this.OrderDate=_OrderDate;
    this.Image=_Image;
    this.Shop_Id=_Shop_Id;
    this.Shop_Name=_Shop_Name;

         }
}

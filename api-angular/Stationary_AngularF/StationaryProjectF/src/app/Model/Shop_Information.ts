export class Shop_Information {
  public Shop_Id?: number;

  public Shop_Name?: string;

  public Address?: string;

  public MobileNo?: string;

  constructor(
    _Shop_Id?: number,
    _Shop_Name?: string,
    _Address?: string,
    _MobileNo?: string
  ) {
    this.Shop_Id = _Shop_Id;
    this.Shop_Name = _Shop_Name;
    this.Address = _Address;
    this.MobileNo = _MobileNo;
  }
}

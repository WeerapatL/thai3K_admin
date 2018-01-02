export class Product {
    ProductNo : number;
    ProductCode : string;
    ProductName : string;
    ProductNameEng : string;
    ProductDesc : string;
    ProductImgPath : string;
    ProductCategoryID : number;
    ProductCategory : string;
    ProductBrand : string;
    TableHead1 : string;
    TableHead2 : string;
    TableHead3 : string;
    TableHead4 : string;
    TableHead5 : string;
    TableHead6 : string;
    TableHead7 : string;
    TableHead8 : string;
    TableDetail : TableDetail[] = [];
  
}  
export class TableDetail{
    TableDetailNo : number;
    TableDetail1 : string;
    TableDetail2 : string;
    TableDetail3 : string;
    TableDetail4 : string;
    TableDetail5 : string;
    TableDetail6 : string;
    TableDetail7 : string;
    TableDetail8 : string;
    ProductNo : number;
}
export class Account{
    AccountNo : number;
    Username : string;
    Password : string;
}
export class Company{
    CompanyNo : number;
    CompanyName : string;
    CompanyDesc : string;
    Email : string;
    Tel : string;
    Facebook : string;
    Line : string;
    Address : string;
    QRCode :string
}

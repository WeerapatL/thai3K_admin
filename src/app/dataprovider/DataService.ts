import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';  


@Injectable()
export class DataService {

  constructor(private http : Http){
  }

  getProducts(): Observable<any[]> {
    return this.http.get("/api/backend_product.php").map((response:Response) => response.json());
  }

  getBrandProduct(BrandParams:string): Observable<any[]> {
    return this.http.post("/api/backend_product_by_brand.php",{Brand:BrandParams}).map((response:Response) => response.json());
  }
  getCategoryProduct(CatagoryParams:number): Observable<any[]> {
    return this.http.post("/api/backend_product_by_category.php",{Brand:CatagoryParams}).map((response:Response) => response.json());
  }
}
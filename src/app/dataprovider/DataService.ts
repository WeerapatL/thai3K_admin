import { Product, TableDetail, Company } from './DataProvider';
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
  getCategoryProduct(CategoryParams:number): Observable<any[]> {
    return this.http.post("/api/backend_product_by_category.php",{CategoryID:CategoryParams}).map((response:Response) => response.json());
  }
  createProduct(Product : Product):Observable<any[]> {
    return this.http.post("/api/backend_create_product.php",Product).map((response:Response) => response.json());
  }
  createProductTableDetail(TableDetail : TableDetail):Observable<any[]> {
    return this.http.post("/api/backend_create_product_detail.php",TableDetail).map((response:Response) => response.json());
  }
  updateProduct(Product : Product):Observable<any[]> {
    return this.http.post("/api/backend_update_product.php",Product).map((response:Response) => response.json());
  }
  updateProductTableDetail(TableDetail : TableDetail):Observable<any[]> {
    return this.http.post("/api/backend_update_product_detail.php",TableDetail).map((response:Response) => response.json());
  }
  uploadImage(formData:FormData):Observable<any[]>{
    return this.http.post("/api/backend_image_upload.php",formData).map((response:Response) => response.json());
  }
  deleteProduct(Product:Product):Observable<any[]>{
    return this.http.post("/api/backend_delete_product.php",Product).map((response:Response)=> response.json());
  }
  getCompany(): Observable<any[]> {
    return this.http.post("/api/backend_company.php","").map((response:Response) => response.json());
  }
  companyUpdate(c:Company):Observable<any[]> {
    return this.http.post("/api/backend_update_company.php",c).map((response:Response) => response.json());
  }
  uploadResource(formData:FormData):Observable<any[]>{
    return this.http.post("/api/backend_resource_upload.php",formData).map((response:Response) => response.json());
  } 
  deleteTabledetail(Product:Product):Observable<any[]>{
    return this.http.post("/api/backend_delete_tabledetail.php",Product).map((response:Response)=> response.json());
  }
  deleteImg(imgpath:any):Observable<any[]>{
    return this.http.post("/api/backend_delete_img.php",imgpath).map((response:Response)=> response.json());
  }

}

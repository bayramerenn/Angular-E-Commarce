import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrand } from '../shared/models/ibrand';
import { IPagenation } from '../shared/models/IPagenation';
import { IType } from '../shared/models/IProductType';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private baseUrl = "https://localhost:5001/api/";
  constructor(private http:HttpClient) { }

  getProducts():Observable<IPagenation>{
    return this.http.get<IPagenation>(this.baseUrl+"products");
  }

  getBrands():Observable<IBrand[]>{
    return this.http.get<IBrand[]>(this.baseUrl+"products/brands");
  }
  getTypes():Observable<IType[]>{
    return this.http.get<IType[]>(this.baseUrl+"products/types");
  }
}

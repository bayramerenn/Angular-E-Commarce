import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { IBrand } from '../shared/models/ibrand';
import { IPagenation } from '../shared/models/IPagenation';
import { IType } from '../shared/models/IProductType';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private baseUrl = "https://localhost:5001/api/";
  constructor(private http: HttpClient) { }



  getProducts(brandId?: number, typeId?: number, sort?: string) {
    let params = new HttpParams();
    if (brandId) {

      params = params.append('ProductBrandId', brandId.toString());
    }
    if (typeId) {
      params = params.append('ProductTypeId', typeId.toString());
    }
    if (sort) {
      params = params.append('Sort', sort.toString());
    }

    return this.http.get<IPagenation>(this.baseUrl + 'products', {
      observe: 'response', params
    }).pipe(
      map(response => {
        return response.body
      })
    );
  }

  getBrands(): Observable<IBrand[]> {
    return this.http.get<IBrand[]>(this.baseUrl + "products/brands");
  }
  getTypes(): Observable<IType[]> {
    return this.http.get<IType[]>(this.baseUrl + "products/types");
  }
}

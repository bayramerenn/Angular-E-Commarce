import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
// import { IBrand } from '../shared/models/ibrand';
import { IPagenation } from '../shared/models/IPagenation';
import { IType } from '../shared/models/IProductType';
import { map } from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';
import { IProduct } from '../shared/models/IProduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }


  getProduct(id:number):Observable<IProduct>{
    return this.http.get<IProduct>(this.baseUrl +'products/'+id)
  }

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();
    if (shopParams.brandId) {

      params = params.append('ProductBrandId', shopParams.brandId.toString());
    }
    if (shopParams.typeId) {
      params = params.append('ProductTypeId', shopParams.typeId.toString());
    }
    if (shopParams.search) {
      params = params.append('Search',shopParams.search);
    }

    params = params.append('Sort', shopParams.sortSelected);
    params = params.append("PageIndex",shopParams.pageNumber.toString())
    params = params.append("PageSize",shopParams.pageSize.toString())

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

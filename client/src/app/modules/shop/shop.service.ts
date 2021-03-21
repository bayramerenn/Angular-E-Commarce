import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagenation } from '../shared/models/IPagenation';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private baseUrl = "https://localhost:5001/api/";
  constructor(private http:HttpClient) { }

  getProducts():Observable<IPagenation>{
    return this.http.get<IPagenation>(this.baseUrl+"products");
  }
}

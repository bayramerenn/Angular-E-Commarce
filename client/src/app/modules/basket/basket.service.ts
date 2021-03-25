import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Basket, IBasket, IBasketItem } from '../shared/models/basket';
import { IProduct } from '../shared/models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  baseUrl = environment.apiUrl;
  private basketSource = new BehaviorSubject<IBasket>({id:"",items:[]})
  basket$ = this.basketSource.asObservable();
  constructor(private http: HttpClient) { }

  getBasket(id: string) {
    return this.http.get(this.baseUrl + 'basket?id=' + id)
      .pipe(
        map(basket => {
          this.basketSource.next(basket as IBasket)
         
        }
        )
      )
  }
  
  setBasket(basket:IBasket){
    return this.http.post<IBasket>(this.baseUrl +'basket',basket)
      .subscribe(response => {
        this.basketSource.next(response);
       
      },error => {
        console.log(error)
      })
  }

  getCurrentBasketValue(){
    if (this.basketSource.value.id === "") {
      return null;
    }
    return this.basketSource.value;
  }

  addItemToBasket(item:IProduct,quantity = 1){
    const itemToAdd:IBasketItem = this.mapProductItemBasketItem(item,quantity);
    const basket = this.getCurrentBasketValue() ?? this.createBasket();
    basket.items = this.addOrUpdateItem(basket.items,itemToAdd,quantity);
    this.setBasket(basket);
  }
  addOrUpdateItem(items: IBasketItem[], itemToAdd: IBasketItem, quantity: number): IBasketItem[] {
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      items.push(itemToAdd);
    } else {
      items[index].quantity += quantity;
    }

    return items;
  }

  private createBasket(): IBasket {
    const basket = new Basket();
    localStorage.setItem("basket_id",basket.id);
    return basket;
  }

  private mapProductItemBasketItem(item: IProduct, quantity: number): IBasketItem {
    return {
      id : item.id,
      productName : item.name,
      pictureUrl :item.pictureUrl,
      price :item.price,
      quantity,
      type:item.productType,
      brand:item.productBrand
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from '../../basket/basket.service';
import { IBasket, IBasketItem } from '../../shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  basket$: Observable<IBasket>
  totalQty: number;
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.basket$.subscribe(s => {
      this.totalQty = this.getTotalQuantity(s.items);
    })

  }

  getTotalQuantity(items: IBasketItem[]): number {
    var data = items
      .map(x => x.quantity)
      .reduce((a, b) => a + b, 0);
    return data;
  }

}

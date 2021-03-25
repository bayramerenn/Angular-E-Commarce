import { Component, OnInit } from '@angular/core';
import { BasketService } from './modules/basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  constructor(private basketService:BasketService) {}

  ngOnInit(): void {
    const basketId = localStorage.getItem("basket_id");
    this.basketService.getBasket(basketId!)
      .subscribe(() => {
        console.log("initiliaze basket")
      })
  }

  title = 'client';
}

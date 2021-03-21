import { Component, OnInit } from '@angular/core';
import { IBrand } from '../shared/models/ibrand';
import { IProduct } from '../shared/models/IProduct';
import { IType } from '../shared/models/IProductType';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: IProduct[];
  brands: IBrand[];
  types: IType[];
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProdcuts();
    this.getBrands();
    this.getTypes();
  }
  getProdcuts():void{
    this.shopService.getProducts()
    .subscribe(response => {
      this.products = response.data
      console.log(response)
    }, err => console.log(err));
  }

  getBrands():void{
    this.shopService.getBrands()
    .subscribe(response => {
      this.brands = response
      console.log(response)
    }, err => console.log(err));
  }

  getTypes():void{
    this.shopService.getTypes()
    .subscribe(response => {
      this.types = response
      console.log(response)
    }, err => console.log(err));
  }
}

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
  brandIdSelected:number;
  typeIdSelected:number;
  sortSelected:string = "name";

  sortOptions = [
    {name:"Alphabetical",value:"name"},
    {name:"Price: Low to High",value:"priceAsc"},
    {name:"Price: High to Low",value:"priceDesc"}
  ]

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProdcuts();
    this.getBrands();
    this.getTypes();
  }

  getProdcuts():void{
    console.log(this.brandIdSelected)
    this.shopService.getProducts(this.brandIdSelected,this.typeIdSelected,this.sortSelected)
    .subscribe(response => {
      this.products = response?.data as IProduct[]
    }, err => console.log(err));
  }

  getBrands():void{
    this.shopService.getBrands()
    .subscribe(response => {
      this.brands = [{id:0,name:"All"},...response]
    }, err => console.log(err));
  }

  getTypes():void{
    this.shopService.getTypes()
    .subscribe(response => {
      this.types = [{id:0,name:"All"},...response]
    }, err => console.log(err));
  }
  onBrandSelected(brandId:number):void{
    this.brandIdSelected = brandId;
    this.getProdcuts();
  }
  onTypeSelected(typeId:number):void{
    this.typeIdSelected = typeId;
    this.getProdcuts();
  }

  onSortSelected(sort:string):void{
    this.sortSelected = sort;
    this.getProdcuts();
  }
}

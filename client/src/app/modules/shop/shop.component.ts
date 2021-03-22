import { Component, OnInit } from '@angular/core';
import { IBrand } from '../shared/models/ibrand';
import { IProduct } from '../shared/models/IProduct';
import { IType } from '../shared/models/IProductType';
import { ShopParams } from '../shared/models/shopParams';
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
  shopParams = new ShopParams();
  totalCount:number = 0;

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
    
    this.shopService.getProducts(this.shopParams)
    .subscribe(response => {
      this.products = response?.data as IProduct[];
      this.shopParams.pageNumber = response?.pageIndex as number;
      this.shopParams.pageSize = response?.pageSize as number;
      this.totalCount = response?.count as number;
      console.log(response)
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
    this.shopParams.brandId = brandId;
    this.getProdcuts();
  }
  onTypeSelected(typeId:number):void{
    this.shopParams.typeId = typeId;
    this.getProdcuts();
  }

  onSortSelected(sort:string):void{
    this.shopParams.sortSelected = sort;
    this.getProdcuts();
  }

  onPageChanged(event:any){
    this.shopParams.pageNumber = event.page;
    this.getProdcuts();
  }
}

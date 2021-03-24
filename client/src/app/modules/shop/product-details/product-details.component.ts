import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../shared/models/IProduct';
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {



  product: IProduct;
  selectId: number;
  constructor(private route: ActivatedRoute, private service: ShopService) {


  }

  ngOnInit(): void {
    this.loadProduct()
  }

  loadProduct() {
    // const id = Number(this.route.snapshot.paramMap.get('id'));

    this.route.paramMap.subscribe(
      params => {
        this.selectId = Number(params.get('id'))
      }
    )
    this.service.getProduct(this.selectId).subscribe(
      response => this.product = response
    )
  }
}

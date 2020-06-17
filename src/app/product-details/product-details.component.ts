import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../_model/product';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

	product: Product;
	selectedPhotoUrl: string;

  constructor(
	  private productService: ProductService,
	  private route: ActivatedRoute
  ) { }

  ngOnInit() {
	  this.getProduct();
	  this.selectedPhotoUrl = this.product.photoUrls[0];
  }

  getProduct(): void {
	  const productId = +this.route.snapshot.paramMap.get('productId');
	  this.productService.getById(productId)
		  .subscribe(product => this.product = product, error => console.log(error));
  }

  selectPhotoUrl(photoUrl: string) {
	  this.selectedPhotoUrl = photoUrl;
  }
}

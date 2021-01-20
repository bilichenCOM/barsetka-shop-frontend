import { Category } from './../_model/category';
import { CategoryService } from './../_service/category.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../_service/product.service';
import { Product } from './../_model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-administration',
  templateUrl: './product-details-administration.component.html',
  styleUrls: ['./product-details-administration.component.css']
})
export class ProductDetailsAdministrationComponent implements OnInit {

  public prod: Product;
  public create: boolean;
  public categories: Category[] = [];
  public submitted: boolean;
  public err: boolean;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    const path = this.route.snapshot.paramMap.get('productId');
    if (path === 'new') {
      this.create = true;
      this.prod = new Product();
    } else {
      this.productService.getById(+path)
        .subscribe(pr => this.prod = pr);
    }
    this.categoryService.getAll()
      .subscribe(cats => this.categories = cats);
  }

  submit() {
    this.submitted = true;
    if (this.create) {
      this.productService.save(this.prod)
        .subscribe(pr => {
          this.prod = pr;
          this.err = false;
          this.create = false;
        });
    } else {
      this.productService.update(this.prod)
        .subscribe(res => {
          this.err = false;
        }, err => {
          this.err = true;
        })
    }
  }

  onChangeCat(cat) {
		this.prod.category=cat;
	}

}

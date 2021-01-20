import { Product } from './../_model/product';
import { CategoryService } from './../_service/category.service';
import { ProductService } from './../_service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-administration',
  templateUrl: './products-administration.component.html',
  styleUrls: ['./products-administration.component.css']
})
export class ProductsAdministrationComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productService: ProductService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll()
      .subscribe(cats => {
         cats.forEach(cat => {
          this.categoryService.getAllProducts(cat.id)
            .subscribe(prs => this.products = prs);
         })
       })
  }

  delete(pr: Product) {
    this.productService.deleteById(pr.id);
  }

}

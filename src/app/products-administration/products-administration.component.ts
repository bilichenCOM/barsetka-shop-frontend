import { Category } from './../_model/category';
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
  public deleted: boolean;
  public deletedId: number;
  public err: boolean;
  public selectedCategory: Category;
  public categories: Category[];

  constructor(private productService: ProductService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll()
      .subscribe(cats => {
        this.categories = cats;
        this.selectedCategory = this.categories[0];
        this.categoryService.getAllProducts(this.selectedCategory.id)
          .subscribe(prods => this.products = prods, err => console.log(err));
      }, err => console.log(err));
  }

  delete(pr: Product) {
    this.products = this.products.filter(p => p.id !== pr.id)
    this.productService.deleteById(pr.id)
      .subscribe(res => this.deleted = true, err => {
        console.log(err);
        this.err = true;
      });
    this.deletedId = pr.id;
  }

  onChangeCat(cat) {
    this.selectedCategory = cat;
    this.categoryService.getAllProducts(this.selectedCategory.id)
          .subscribe(prods => this.products = prods, err => console.log(err));
  }
}

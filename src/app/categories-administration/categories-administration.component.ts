import { Category } from './../_model/category';
import { CategoryService } from './../_service/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-administration',
  templateUrl: './categories-administration.component.html',
  styleUrls: ['./categories-administration.component.css']
})
export class CategoriesAdministrationComponent implements OnInit {

  public categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll()
      .subscribe(cats => this.categories = cats);
  }

  delete(cat: Category) {
    this.categories = this.categories.filter(c => c.id !== cat.id);
    this.categoryService.deleteById(cat.id);
  }

}

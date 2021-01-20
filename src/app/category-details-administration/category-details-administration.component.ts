import { Category } from './../_model/category';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../_service/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-details-administration',
  templateUrl: './category-details-administration.component.html',
  styleUrls: ['./category-details-administration.component.css']
})
export class CategoryDetailsAdministrationComponent implements OnInit {

  public cat: Category;
  public submitted: boolean;
  public create: boolean;
  public err: boolean;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const path = this.route.snapshot.paramMap.get('categoryId');
    if (path === 'new') {
      this.create = true;
      this.cat = new Category();
    } else {
      this.categoryService.getById(+path)
        .subscribe(cat => this.cat = cat);
    }
  }

  submit() {
    this.submitted = true;
    if (this.cat.id > 0) {
      this.create = false;
    }

    if (this.create) {
      this.categoryService.save(this.cat)
        .subscribe(res => {
          this.err = false;
          this.cat = res;
        })
    } else {
      this.categoryService.update(this.cat)
        .subscribe(res => {
          this.err = false;
        }, err => {
          console.log(err);
          this.err = false;
        });
    }
  }

}

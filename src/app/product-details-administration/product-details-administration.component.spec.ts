import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsAdministrationComponent } from './product-details-administration.component';

describe('ProductDetailsAdministrationComponent', () => {
  let component: ProductDetailsAdministrationComponent;
  let fixture: ComponentFixture<ProductDetailsAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

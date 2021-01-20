import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDetailsAdministrationComponent } from './category-details-administration.component';

describe('CategoryDetailsAdministrationComponent', () => {
  let component: CategoryDetailsAdministrationComponent;
  let fixture: ComponentFixture<CategoryDetailsAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDetailsAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDetailsAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

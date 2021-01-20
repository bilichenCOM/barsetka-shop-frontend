import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAdministrationComponent } from './categories-administration.component';

describe('CategoriesAdministrationComponent', () => {
  let component: CategoriesAdministrationComponent;
  let fixture: ComponentFixture<CategoriesAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
